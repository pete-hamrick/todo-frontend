import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home'
import Signup from './Signup';
import Login from './Login';
import Header from './Header';
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
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
          </Switch>
        </BrowserRouter>
      </section>
    );
  }
}
 
export default App;