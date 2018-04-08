import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
// import {Form,Button} from 'semantic-ui-react'
// import isEmail from 'validator/lib/isEmail';
import {registerUser,setLoad} from '../../actions/userActions';

import Emailerror from '../messages/emailError';
import Passworderror from '../messages/passwordError';
import Error from '../messages/Error';
import Loader from '../Loader'


class Signup extends React.Component{

	state={
		data:{
			email:'',
			password:'',
			username:'',
			confirmpassword:''
		},
		emailCheck:true,
		passwordCheck:true,
		usernameCheck:true,
		passwordMatched:true,
		message:""
	};

	onSubmit=function(e){
		e.preventDefault();
		if(this.state.data.email!=="" && this.state.data.username!=="" && this.state.data.password!=="" && this.state.data.confirmpassword!==""){
			this.props.setLoad()
			.then(()=>
				this.props.registerUser(this.state.data)
				.then(()=>
					console.log("fd")
				)
			);
		}
		else if(this.state.data.email==="" || this.state.data.username==="" || this.state.data.password==="" || this.state.data.confirmpassword===""){
			this.setState({
				...this.state,
				message:"Fill out all the field"
			});
		}
		else if(this.state.data.confirmpassword!== this.state.data.password){
			this.setState({
				...this.state,
				message:"Password does not match"
			});
		}
	}

	onChange=function(e){
		if(e.target.name==="email"){
			if(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e.target.value)){
				this.setState({
					emailCheck:false
				});
			}
			else{
				this.setState({
					emailCheck:true
				});	
			}
		}
		if(e.target.name==="password"){
			if(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/.test(e.target.value)){
				this.setState({
					passwordCheck:false
				});
			}
			else{
				this.setState({
					passwordCheck:true
				});	
			}
			if(this.state.data.confirmpassword === e.target.value){
				this.setState({
					passwordMatched:false
				});
			}
			else{
				this.setState({
					passwordMatched:true
				});	
			}
		}
		if(e.target.name==="confirmpassword"){
			if(this.state.data.password === e.target.value){
				this.setState({
					passwordMatched:false
				});
			}
			else{
				this.setState({
					passwordMatched:true
				});	
			}
		}
		this.setState({
      		data: { ...this.state.data, [e.target.name]: e.target.value }
    	});
	}

	render(){
		return(
			<div className="card">
				<div className="card-body">
					<h1 className="signup">Signup</h1>
					{this.props.loading && <Loader />}
					{this.state.message && <Error text={this.state.message} class1={"error"}/>}
					{this.props.data.success ? (this.props.data.message && <Error text={this.props.data.message} class1={"success"}/>):(this.props.data.message && <Error text={this.props.data.message} class1={"error"} />)}
					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
					    	<label htmlFor="email">Email address:</label>
					    	<input 
					    		type="email" 
					    		className="form-control" 
					    		id="email"
					    		name="email"
					    		placeholder="Enter email"
					    		value={this.state.data.email}
					    		onChange={this.onChange.bind(this)} />
					  	</div>

					  	{<Emailerror email={this.state.data.email}/>}

						<div className="form-group">
					    	<label htmlFor="username">Username:</label>
					    	<input 
					    		type="text" 
					    		className="form-control" 
					    		id="username"
					    		name="username"
					    		placeholder="Enter username"
					    		value={this.state.data.username}
					    		onChange={this.onChange.bind(this)} />
					  	</div>	

					  	<div className="form-group">
					    	<label htmlFor="password">Password:</label>
					    	<input 
					    		type="password" 
					    		className="form-control" 
					    		id="password" 
					    		name="password"
					    		placeholder="Enter password"
					    		value={this.state.data.password}
					    		onChange={this.onChange.bind(this)} />
					 	</div>

					 	{this.state.passwordCheck && <Passworderror />}

						<div className="form-group">
					    	<label htmlFor="confirmpassword">Confirm Password:</label>
					    	<input 
					    		type="password" 
					    		className="form-control" 
					    		id="confirmpassword" 
					    		name="confirmpassword"
					    		placeholder="Confirm password"
					    		value={this.state.data.confirmpassword}
					    		onChange={this.onChange.bind(this)} />
					 	</div>
					 	{this.state.passwordMatched && <Error text={"Password does not match"} class1={"error"} />}
					  	<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}


Signup.propTypes={
	registerUser: PropTypes.func.isRequired,
	setLoad: PropTypes.func.isRequired
};	

const mapStateToProps=state=>({
	data:state.user.data,
	loading:state.user.loading
});

export default connect(mapStateToProps,{registerUser,setLoad})(Signup);