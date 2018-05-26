import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export default class UsersIndex extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  componentWillMount() {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then((users) => {
      this.setState({ users });
    });
  }

  render() {
    return (
      <ListGroup>
        { this.state.users.map(user => (
          <ListGroupItem key={user.id} href={`/users/${user.id}`}>
            {user.first_name} {user.last_name}
          </ListGroupItem>
        ))}
      </ListGroup>
    )
  }
}
