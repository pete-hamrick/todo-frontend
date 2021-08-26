import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Home from './Home';
import './Header.css';
import './App.css';
import Auth from './Auth';
import ToDos from './ToDos.js';
class App extends Component {
  state = { 
    token: localStorage.getItem('TOKEN')
  }
  setToken = (value) => {
    this.setState({ token: value })
  }
  render() { 
    return (  
      <section>
        <BrowserRouter>
          <header>
                <div className='links'>
                    <NavLink activeClassName='selected' exact to='/'>Home</NavLink>
                    {this.state.token && (
                        <NavLink activeClassName='selected' to='/todos'>To Do List</NavLink>
                    )}
                    {!this.state.token && (
                        <>
                            <NavLink activeClassName='selected' to='/signup'>Signup</NavLink>
                            <NavLink activeClassName='selected' to='/signin'>Signin</NavLink>
                        </>
                    )}
                </div>
            </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route 
              path='/signin'
              render={(routerProps) => (
                <Auth
                  setToken={this.setToken}
                  type='signin'
                  {...routerProps}
                />
              )}
            />
            <Route 
              path='/signup'
              render={(routerProps) => (
                <Auth
                setToken={this.setToken}
                  type='signup'
                  {...routerProps}
                />
              )}
            />
            <Route
              path='/todos'
              render={(routerProps) =>
                this.state.token ? (
                  <ToDos 
                    token={this.state.token}
                    {...routerProps} 
                  />
                ) : (
                  <Redirect to='/signin' />
                )
              }
            />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
 
export default App;