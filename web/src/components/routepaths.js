import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute} from 'react-router';
import store, {history} from '../store';

//components
import Connector from './connector';
import HomePage from './homepage';
import Work from './work';
import Contact from './contact';
import Register from './Register';

class RoutePaths extends Component{
  render(){
    return(
      <Provider store={store}>
        <Router history={history}>
          <Route path="/" component={Connector}>
            <IndexRoute component={HomePage}></IndexRoute>
            <Route path="/work" component={Work}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/register" component={Register}></Route>
            {/*
            Additional routes here. example:
            <Route path="/users" component={AllUsers}></Route>
            */}
          </Route>
        </Router>
      </Provider>
    );
  }
}

export default RoutePaths;