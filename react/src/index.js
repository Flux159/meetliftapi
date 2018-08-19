import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import RunMeet from './RunMeet';

class Checkin extends React.Component {
  render() {
    return <div>Checkin</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/checkin'>Checkin Page</Link>
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