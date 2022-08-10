import React, { Component } from "react";

class Login extends Component {
    constructor() {
        super();
        this.state = { name: '', email:'', password:''};
        this._handleInput = this._handleInput.bind(this)
        this._handleSubmit = this._handleSubmit.bind(this)
    }
    
    _handleSubmit = (e) => {
        e.preventDefault();
        
    }

    _handleInput = (e) => {
        this.setState( {content: e.target.value} )
    }


    render()  {
        return(
            <form onSubmit={ this._handleSubmit }>
                <div>
                    <h2>Login</h2>
                    { /* Error */ }
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name' id='name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" name='password' id='password' />
                    </div>
                        <input type="submit" value='LOGIN'/>
                </div>
            </form>
            
        )
    }
}

export default Login;