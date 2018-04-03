import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './Containers/App';
import ChildRender from './Containers/ChildRender';
import PortalExample from './Containers/PortalExample';
import ContextExample from './Containers/ContextExample';
import TodoExample from './Containers/TodoExample';
import UnsafeLifecycle from './Containers/UnsafeLifecycle';
import StrictModeExample from './Containers/StrictModeExample';
import CreateRefExample from './Containers/CreateRefExample';
import ForwardRefExample from './Containers/ForwardRefExample';

document.body.style.margin = 0;

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/child-render" component={ChildRender} />
        <Route path="/portal" component={PortalExample} />
        <Route path="/context-api" component={ContextExample} />
        <Route path="/todo" component={TodoExample} />
        <Route path="/unsafe" component={UnsafeLifecycle} />
        <Route path="/strictMode" component={StrictModeExample} />
        <Route path="/create-ref" component={CreateRefExample} />
        <Route path="/forward-ref" component={ForwardRefExample} />
      </Switch>
    </div>
  </Router>
);

export default Root;
