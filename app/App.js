import React from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';

import Home from './components/Home';
import Nav from './components/Nav';
import Work from './components/Work';
import Photo from './components/Photo';
import portItem from './components/portItem';

/*
All components will be routed in this directory
*/
class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path="/" component={Nav}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="work" component={Work}></Route>
          <Route path="work/:portItemName" component={portItem}></Route>
          <Route path="photo" component={Photo}></Route>
        </Route>
      </Router>
    )
  }
}

export default App;
