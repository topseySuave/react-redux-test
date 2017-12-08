import React, { Component } from 'react';
import UserList from './containers/user-list';

class App extends Component {
  render() {
    return (
        <div>
            <h1>Users List</h1>
            <UserList />
            <hr />
            <h1>User Detail</h1>
        </div>
    );
  }
}

export default App;
