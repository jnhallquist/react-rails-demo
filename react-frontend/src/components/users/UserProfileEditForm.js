import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Alert,
  Button,
  Col,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';
import validator from 'validator';
import StatesArray from '../../util/states';
import CountriesArray from '../../util/countries';

export default class UserProfileEditForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: this.props.user.first_name,
      last_name: this.props.user.last_name,
      job_title: this.props.user.job_title || '',
      phone_number: this.props.user.phone_number,
      extension: this.props.user.extension || '',
      email: this.props.user.email,
      address_1: this.props.user.address_1,
      address_2: this.props.user.address_2 || '',
      city: this.props.user.city,
      state: this.props.user.state,
      postal_code: this.props.user.postal_code,
      country: this.props.user.country,
      formErrors: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
  }

  validateForm() {
    console.log(this.state)
    const validationErrors = [];

    if (validator.isEmpty(this.state.first_name)) {
      validationErrors.push('First Name cannot be left blank');
    }

    if (validator.isEmpty(this.state.last_name)) {
      validationErrors.push('Last Name cannot be left blank');
    }

    if (validator.isEmpty(this.state.phone_number)) {
      validationErrors.push('Phone Number cannot be left blank');
    }

    if (!validator.isMobilePhone(this.state.phone_number, 'any')) {
      validationErrors.push('Phone Number is invalid');
    }

    if (validator.isEmpty(this.state.email)) {
      validationErrors.push('Email Address cannot be left blank');
    }

    if (!validator.isEmail(this.state.email)) {
      validationErrors.push('Email Address is invalid');
    }

    if (validator.isEmpty(this.state.address_1)) {
      validationErrors.push('Address 1 cannot be left blank');
    }

    if (validator.isEmpty(this.state.city)) {
      validationErrors.push('City cannot be left blank');
    }

    if (validator.isEmpty(this.state.postal_code)) {
      validationErrors.push('Postal Code cannot be left blank');
    }

    if (validationErrors.length === 0) {
      this.handleSubmit();
    } else {
      this.setState({
        formErrors: validationErrors
      });
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    fetch('http://localhost:3000/users/1', {
      method: 'PUT',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      if (response.status === 200) {
        this.props.handleClose();
        this.props.handleSuccessfulUpdate(this.state);
      }
    })
    .catch((error) => { throw error; });
  }

  render() {
    return (
      <div>
        {this.state.formErrors.length > 0 &&
          <Alert bsStyle="danger">
            {
              this.state.formErrors.map(
                (msg, index) => (<li key={index}>{msg}</li>)
              )
            }
          </Alert>
        }
        <Form horizontal onSubmit={this.handleSubmit}>
          <FormGroup controlId="firstName">
            <Col componentClass={ControlLabel} sm={2}>
              First Name
            </Col>
            <Col sm={10}>
              <FormControl
                name="first_name"
                type="text"
                placeholder="First Name"
                defaultValue={this.state.first_name}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="lastName">
            <Col componentClass={ControlLabel} sm={2}>
              Last Name
            </Col>
            <Col sm={10}>
              <FormControl
                name="last_name"
                type="text"
                placeholder="Last Name"
                defaultValue={this.state.last_name}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="jobTitle">
            <Col componentClass={ControlLabel} sm={2}>
              Job Title
            </Col>
            <Col sm={10}>
              <FormControl
                name="job_title"
                type="text"
                placeholder="Job Title"
                defaultValue={this.state.job_title}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="phoneNumber">
            <Col componentClass={ControlLabel} sm={2}>
              Phone Number
            </Col>
            <Col sm={10}>
              <FormControl
                name="phone_number"
                type="text"
                placeholder="Phone Number"
                defaultValue={this.state.phone_number}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="phoneNumberExtension">
            <Col componentClass={ControlLabel} sm={2}>
              Extension
            </Col>
            <Col sm={10}>
              <FormControl
                name="extension"
                type="text"
                placeholder="Extension"
                defaultValue={this.state.extension}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="emailAddress">
            <Col componentClass={ControlLabel} sm={2}>
              Email Address
            </Col>
            <Col sm={10}>
              <FormControl
                name="email"
                type="email"
                placeholder="Email Address"
                defaultValue={this.state.email}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="address1">
            <Col componentClass={ControlLabel} sm={2}>
              Address 1
            </Col>
            <Col sm={10}>
              <FormControl
                name="address_1"
                type="text"
                placeholder="Address 1"
                defaultValue={this.state.address_1}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="address2">
            <Col componentClass={ControlLabel} sm={2}>
              Address 2
            </Col>
            <Col sm={10}>
              <FormControl
                name="address_2"
                type="text"
                placeholder="Address 2"
                defaultValue={this.state.address_2}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="city">
            <Col componentClass={ControlLabel} sm={2}>
              City
            </Col>
            <Col sm={10}>
              <FormControl
                name="city"
                type="text"
                placeholder="City"
                defaultValue={this.state.city}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="state">
            <Col componentClass={ControlLabel} sm={2}>
              State
            </Col>
            <Col sm={10}>
              <FormControl
                name="state"
                componentClass="select"
                defaultValue={this.state.state}
                onChange={this.handleChange}
              >
                {
                  StatesArray.map((option, index) => (
                    <option key={index} value={option}>{option}</option>))
                }
              </FormControl>
            </Col>
          </FormGroup>
          <FormGroup controlId="postalCode">
            <Col componentClass={ControlLabel} sm={2}>
              Postal Code
            </Col>
            <Col sm={10}>
              <FormControl
                name="postal_code"
                type="text"
                placeholder="Postal Code"
                defaultValue={this.state.postal_code}
                onChange={this.handleChange}
              />
            </Col>
          </FormGroup>
          <FormGroup controlId="country">
            <Col componentClass={ControlLabel} sm={2}>
              Country
            </Col>
            <Col sm={10}>
              <FormControl
                name="country"
                componentClass="select"
                defaultValue={this.state.country}
                onChange={this.handleChange}
              >
                {
                  CountriesArray.map((option, index) => (
                    <option key={index} value={option}>{option}</option>))
                }
              </FormControl>
            </Col>
          </FormGroup>
          <Button bsStyle="primary" onClick={this.validateForm}>Save</Button>
        </Form>
      </div>
    );
  }
}

UserProfileEditForm.propTypes = {
  user: PropTypes.shape.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSuccessfulUpdate: PropTypes.func.isRequired
};
