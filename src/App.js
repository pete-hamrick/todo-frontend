import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, NavLink, Redirect } from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Auth from './Auth';
class App extends Component {
  state = { 
    email: '',
    password: '',
    type: '',
  }
  render() { 
    return (  
      <section>
        <BrowserRouter>
          <Header />
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
            {/* //TODO
            write /todos path */}
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
 
export default App;