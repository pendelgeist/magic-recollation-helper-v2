import * as React from 'react';
import { Link, Route } from 'react-router-dom';
import Topic from './Topic';
import { RouterMatch } from './RouterMatch';

const Topics = (props: RouterMatch) => (
  <div>
    <h2>Topics</h2>

    <ul>
      <li>
        <Link to={`${props.match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${props.match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${props.match.path}/:id`} component={Topic} />
    <Route
      exact
      path={props.match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);
export default Topics;
