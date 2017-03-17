import React, {Component} from 'react';
import profile from '../imgs/profile.jpg';
import LoginForm from './forms/LoginForm';

class HomePage extends Component{
	render(){
		return(
			<div className="contents container">
			  <div className="row">
				  	<LoginForm {...this.props} />
			  </div>
			</div>
		);
	}
}

export default HomePage;