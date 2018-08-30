import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import RunMeet from './RunMeet';
import Checkin from './Checkin';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/checkin'>Checkin</Link>  <Link to='/'>RunMeet</Link> 
          <Route exact path="/" component={RunMeet} />
          <Route path="/checkin" component={Checkin} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);