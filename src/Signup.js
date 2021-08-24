import React, { Component } from 'react';
import Auth from './Auth';
class Signup extends Component {
    state = { 
        email: '',
        password: '',
    }
    render() { 
        return ( 
            <article>
                <Auth type='Signup' />
            </article>
        );
    }
}
 
export default Signup;