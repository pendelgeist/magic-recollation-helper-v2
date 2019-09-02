import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Topics from './Topics';
import Header from './Header';
import SimplePage from './SimplePage';

const App = () => (
  <Router>
    <div>
      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/simple" render={() => <SimplePage name={'derp'} />} />
    </div>
  </Router>
);

export default App;
