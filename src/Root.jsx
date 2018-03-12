import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './Containers/App';
import ChildRender from './Containers/ChildRender';

document.body.style.margin = 0;

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/child-render" component={ChildRender} />
      </Switch>
    </div>
  </Router>
);

export default Root;
