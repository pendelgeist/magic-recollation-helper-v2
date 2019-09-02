 import * as React from 'react';
 import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 import TestFile from './TestFile';

 interface Props {
 }

 const Routes = (props: Props) => {
   return (
     <Router >
       <Switch>
           <Route
             exact
             path="/test-file"
             render={() => <TestFile name={'Monkey'} />}
           />
       </Switch>
     </Router>
   );
 };

 export default Routes;
