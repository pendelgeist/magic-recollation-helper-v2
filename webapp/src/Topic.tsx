import * as React from 'react';
import { RouterMatch } from './RouterMatch';

const Topic = (props: RouterMatch) => (
  <h3>Requested Param: {props.match.params.id}</h3>
);

export default Topic;
