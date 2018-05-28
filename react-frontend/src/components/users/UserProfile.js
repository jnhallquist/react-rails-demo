import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  Panel
} from 'react-bootstrap';
import EditForm from './UserProfileEditForm';

export default class UserProfile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      show: false
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSuccessfulUpdate = this.handleSuccessfulUpdate.bind(this);
  }

  componentWillMount() {
    const { userId } = this.props.id;
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then((user) => {
      this.setState({ user });
    });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleSuccessfulUpdate(data) {
    const updatedUser = data;
    this.setState({ user: updatedUser });
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title>
              User Profile
            </Panel.Title>
          </Panel.Heading>
          <Panel.Body>
            <p>{this.state.user.first_name} {this.state.user.last_name}</p>
            <p>{this.state.user.job_title}</p>
            <p>{this.state.user.phone_number} {this.state.user.extension}</p>
            <p>{this.state.user.email}</p>
            <p>{this.state.user.address_1}</p>
            <p>{this.state.user.address_2}</p>
            <p>
              {this.state.user.city},
              {this.state.user.state}
              {this.state.user.postal_code}
            </p>
            <p>{this.state.user.country}</p>
          </Panel.Body>
        </Panel>
        <Button onClick={this.handleShow}>
          Edit Profile
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit User Profile</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditForm
              user={this.state.user}
              handleSuccessfulUpdate={this.handleSuccessfulUpdate}
              handleClose={this.handleClose}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

UserProfile.propTypes = {
  id: PropTypes.number.isRequired
};
