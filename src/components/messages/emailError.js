import React from 'react';
import PropTypes from 'prop-types'; 

class Emailerror extends React.Component{
	state={
		firstC:"error",
		secondC:"error",
		thirdC:"error"
	}

	componentDidUpdate= function(newProps) {
		if(this.props.email.length===newProps.email.length+1){
		   	if(this.props.email.indexOf('@')>=0){
		   		this.setState({
		   			firstC:"success"
		   		});
		   	}
		   	else{
		   		this.setState({
		   			firstC:"error"
		   		});	
		   	}
		   	if(/[^a-zA-Z_0-9@.]$/.test(this.props.email)){
		   		this.setState({
		   			secondC:"error"
		   		});
		   	}
		   	else{
		   		this.setState({
		   			secondC:"success"
		   		});
		   	}
		   	if(/[a-zA-Z0-9.@_]{4,}$/.test(this.props.email)){
		   		this.setState({
		   			thirdC:"success"
		   		});
		   	}
		   	else{
		   		this.setState({
		   			secondC:"error"
		   		});
		   	}
		}
	}

	render(){
		return(
			<div>
				<ul className="collection">
					<li className={this.state.firstC}>Must contain '@'</li>
					<li className={this.state.secondC}>Must not contain an special character</li>
					<li className={this.state.thirdC}>Must be atleast 3 character</li>
				</ul>
			</div>
		);
	}
}

Emailerror.propTypes={
	email:PropTypes.string.isRequired
};

export default Emailerror;