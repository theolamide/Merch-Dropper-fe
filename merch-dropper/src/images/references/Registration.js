import React, { useState } from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';

const registerFormDefault = {
  firstName: '',
  lastName: '',
  email: '',
  industry: '',
  companySize: '',
  password: '',
  confirmPassword: ''
};

const Registration = () => {
  const handleChange = (e) => {
    e.preventDefault();
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // DO A THING WITH LOCAL STATE

    setRegisterForm(registerFormDefault);
  };

  const [registerForm, setRegisterForm] = useState(registerFormDefault);

  const {
    firstName,
    lastName,
    email,
    industry,
    companySize,
    password,
    confirmPassword
  } = registerForm;

  return (
    <Form>
      <FormGroup row>
        <Label for='firstName' sm={2}>
          First Name
        </Label>
        <Col sm={6}>
          <Input
            type='text'
            name='firstName'
            value={firstName}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='lastName' sm={2}>
          Last Name
        </Label>
        <Col sm={6}>
          <Input
            type='text'
            name='lastName'
            value={lastName}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='email' sm={2}>
          Email
        </Label>
        <Col sm={6}>
          <Input
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for='industry' sm={2}>
          Industry
        </Label>
        <Col sm={6}>
          <Input
            type='select'
            name='industry'
            value={industry}
            onChange={handleChange}>
            <option value=''>Choose One</option>
            <option value='industryOne'>Industry 1</option>
            <option value='industryTwo'>Industry 2</option>
            <option value='industryThree'>Industry 3</option>
            <option value='industryFour'>Industry 4</option>
            <option value='industryFive'>Industry 5</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for='companySize' sm={2}>
          Company Size
        </Label>
        <Col sm={6}>
          <Input
            type='select'
            name='companySize'
            value={companySize}
            onChange={handleChange}>
            <option value=''>Choose One</option>
            <option value='small'>Small</option>
            <option value='medium'>Medium</option>
            <option value='large'>Large</option>
            <option value='gargantuan'>Gargantuan</option>
          </Input>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Label for='password' sm={2}>
          Create Password
        </Label>
        <Col sm={6}>
          <Input
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for='confirmPassword' sm={2}>
          Confirm Password
        </Label>
        <Col sm={6}>
          <Input
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
          />
        </Col>
      </FormGroup>
      <Button onClick={handleSubmit}>Register</Button>
    </Form>
  );
};

export default Registration;
