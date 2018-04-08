import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';

import './index.css';
import './App.css';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Header from './components/Header';

import store from './store';

class App extends Component {
  render() {
    return (
    	<Provider store={store}>
	    	<Router>
		    	<div>
			        <Header />
			        <Switch>
	                  	<Route exact path='/signup' component={Signup} />
	                  	<Route exact path='/login' component={Login} />
	                </Switch>
			    </div>
			</Router>
		</Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
