import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TopNav from './common/TopNav';
import HomePage from './home/Home';
import UsersIndex from './users/UsersIndex';
import UserProfilePage from './users/UserProfile';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TopNav />
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/users" component={UsersIndex} />
              <Route exact path="/users/:id" component={UserProfilePage} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
