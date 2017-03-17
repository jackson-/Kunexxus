import React, {Component} from 'react';
import profile from '../imgs/profile.jpg';
import SignupForm from './forms/SignupForm';

class Register extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="contents container">
        <div className="row">
            <SignupForm {...this.props} />
        </div>
      </div>
    );
  }
}

export default Register;