import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'

export default class Example extends React.Component {
  render() {
    return (
      <Layout>
        <Form nameClass="contact" method="POST" netlify>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter Your Email" />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter Your Name" />
          </FormGroup>
          <FormGroup>
            <Label for="text">Message</Label>
            <Input type="textarea" name="message" id="message" />
          </FormGroup>
          <button type="submit">Submit</button>
        </Form>
        <h2 className="justifyCenter"><a href="../images/RansonNambaResume.PDF" target="_blank">My Resume</a></h2>
      </Layout>
    );
  }
}