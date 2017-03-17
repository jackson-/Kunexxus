import React, {Component} from 'react';

class LoginForm extends Component{
  constructor(props){
    super(props);
    const funcs = ["login"];
    funcs.forEach( f => this[f] = this[f].bind(this));
  }

  login(e){
    e.preventDefault();
    const {form, email, password} = this;
    this.props.login(email.value, password.value);
    form.reset();
  }

  render(){
    return(
      <form ref={input => this.form = input} onSubmit={(e)=>{this.login(e)}} className="login-form">
        <legend>Login Form</legend>
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
          <button type="submit">Login</button>
        </div>
        <div className="row">
          Not a member? <a href="/register">sign up</a>
        </div>
      </form>
    );
  }
}

export default LoginForm;