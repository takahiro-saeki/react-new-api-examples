import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './Containers/App';
import ChildRender from './Containers/ChildRender';
import PortalExample from './Containers/PortalExample';
import RefsExample from './Containers/RefsExample';
import ContextExample from './Containers/ContextExample';

document.body.style.margin = 0;

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/child-render" component={ChildRender} />
        <Route path="/portal" component={PortalExample} />
        <Route path="/refs" component={RefsExample} />
        <Route path="/context-api" component={ContextExample} />
      </Switch>
    </div>
  </Router>
);

export default Root;
