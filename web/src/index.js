import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import Login from './components/Login';
import Register from './components/Register';
import ProjectsHome from './components/ProjectsHome';
import ProjectsCreate from './components/ProjectsCreate';
import store from './store';

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={ProjectsHome} />
        <Route path="login" component={Login} />
        <Route path="register" component={Register} />
        <Route path="projects" >
          <IndexRoute component={ProjectsHome} />
          <Route path="create" component={ProjectsCreate} />
        </Route>
      </Route>
    </Router>
  </Provider>
), document.getElementById('root'));
