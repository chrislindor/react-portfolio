import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';

import Home from './components/Home';
import Nav from './components/Nav'

/*
All components will be routed in this directory
*/
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Nav}>
          <IndexRoute component={Home}></IndexRoute>
        </Route>
      </Router>
    )
  }
}

export default App;
