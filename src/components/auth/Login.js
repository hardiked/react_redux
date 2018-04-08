import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

// import {Form,Button} from 'semantic-ui-react'
// import isEmail from 'validator/lib/isEmail';
import {loginUser,setLoad} from '../../actions/userActions';

import Error from '../messages/Error';
import Loader from '../Loader'


class Login extends React.Component{

	state={
		data:{
			username:'',
			password:''
		},
		message:""
	};

	onSubmit=function(e){
		e.preventDefault();
		if(this.state.data.username!=="" && this.state.data.password!==""){
			this.props.setLoad()
			.then(()=>
				this.props.loginUser(this.state.data)
				.then(()=>{if(true){console.log(this.props.token)}}));
		}
		else if(this.state.data.username==="" || this.state.data.password===""){
			this.setState({
				...this.state,
				message:"Fill out all the field"
			});
		}
	}

	componentDidUpdate= function(newProps) {

	}

	onChange=function(e){
		this.setState({
      		data: { ...this.state.data, [e.target.name]: e.target.value }
    	});
	}

	render(){
		return(
			<div className="card">
				<div className="card-body">
					<h1 className="signup">Login</h1>
					{this.props.loading && <Loader />}
					{this.props.data.success ? (this.props.data.message && <Error text={this.props.data.message} class1={"success"}/>):(this.props.data.message && <Error text={this.props.data.message} class1={"error"} />)}
					<form onSubmit={this.onSubmit.bind(this)}>
						<div className="form-group">
					    	<label htmlFor="username">Email address:</label>
					    	<input 
					    		type="username" 
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

						
					  	<button type="submit" className="btn btn-primary">Submit</button><br />
					  	Not have an account?<Link to="/signup">Signup</Link>
					</form>
				</div>
			</div>
		);
	}
}


Login.propTypes={
	loginUser: PropTypes.func.isRequired,
	setLoad: PropTypes.func.isRequired
};	

const mapStateToProps=state=>({
	data:state.user.data,
	token:state.user.token,
	loading:state.user.loading
});

export default connect(mapStateToProps,{loginUser,setLoad})(Login);
