import React, {Component} from 'react';

class SignupForm extends Component{
  constructor(props){
    super(props);
  }

  signup(e){
    e.preventDefault();
    console.log(`Signing up ${this.email.value}...`);
    this.props.signup({email: this.email.value, password: this.password.value});
  }

  render(){
    return(
      <form ref={input => this.form = input} onSubmit={(e)=>{this.signup(e)}} className="login-form">
        <legend>Sign up Form</legend>
        <div className="row">
          <formgroup className="col-lg-12">
            <label htmlFor="email">E-mail: </label>
            <input ref={input => this.email = input} type="text" name="email" placeholder="Enter your e-mail" />
          </formgroup>
        </div>
        <div className="row">
          <formgroup className="col-lg-12">
            <label htmlFor="password">Password: </label>
            <input ref={input => this.password = input} type="password" name="password" placeholder="Enter your password" />
          </formgroup>
        </div>
        <div className="row">
          <button type="submit">Sign Up</button>
        </div>
        <div className="row">
          Already a member? <a href="/">Log in</a>
        </div>
      </form>
    );
  }
}

export default SignupForm;