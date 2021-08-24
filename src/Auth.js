import React, { Component } from 'react';
//TODO
//flesh out handleSubmit to get the token from fetch-utils

class Auth extends Component {
    state = { 
        email: '',
        password: '',
    }
    getType = () => {
        return this.props.type === 'signin' ? 'Sign in' : 'Sign Up';
    }
    handleSubmit = async (e) => {
        e.preventDefault();
    }
    render() { 
        return ( 
            <>
                <h1>{this.getType()}</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>{this.props.type}</legend>

                        <label>Email: </label>
                        <input 
                        type='email'
                        onChange={(e) =>
                            this.setState({ email: e.target.value })
                        }
                        />

                        <label>Password: </label>
                        <input 
                        type='password'
                        onChange={(e) =>
                            this.setState({ password: e.target.value })
                        } 
                        />

                        <button>{this.getType()}</button>
                        
                    </fieldset>
                </form>
            </>
        );
    }
}
 
export default Auth;