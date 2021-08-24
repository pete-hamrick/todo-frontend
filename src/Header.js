import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
class Header extends Component {
    render() { 
        return ( 
            <header>
                <div className='links'>
                    <NavLink activeClassName='selected' exact to='/'>Home</NavLink>
                    <NavLink activeClassName='selected' to='/signup'>Signup</NavLink>
                    <NavLink activeClassName='selected' to='/login'>Login</NavLink>
                </div>
            </header>
        );
    }
}
 
export default Header;