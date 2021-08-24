import React, { Component } from 'react';
import Auth from './Auth';

class Login extends Component {
    state = { 
        email: '',
        password: '',
    }
    render() { 
        return ( 
            <Auth type='Login' />
        );
    }
}
 
export default Login;