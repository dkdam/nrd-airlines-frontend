import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = { email:'', password:''};
        this._inputEmail  = this._inputEmail.bind(this)
        this._inputPassword  = this._inputPassword.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }
    
    _handleSubmit = (e) => {
        this.props.onSubmit(this.state);
        console.log(this.state.email)
        console.log(this.state.password)
        e.preventDefault();
        
    }

    _inputEmail = (e) => {
        this.setState( {email: e.target.value} )
    }
    _inputPassword = (e) => {
        this.setState( {password: e.target.value} )
    }

    render()  {
        return(
            <form onSubmit={ this._handleSubmit }>
                <div>
                    <h2>Login</h2>
                    { /* Error */ }
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" required onChange={ this._inputEmail }  />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" required onChange={ this._inputPassword }/>
                    </div>
                        <input type="submit" value='Log In'/>
                </div>
            </form>
            
        )
    }
}

export default Login;
