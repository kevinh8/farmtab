import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
import './ContactForm.css';

class ContactForm extends Component {

  render() {
    return (
      <div className="ContactForm">
          <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="ContactForm-label">Name</Form.Label>
                <Form.Control type="text" size="lg" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label className="ContactForm-label">Email</Form.Label>
                <Form.Control type="email" size="lg" required />
            </Form.Group>
            <Form.Group controlId="ContactForm.ControlTextarea">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows="5" />
            </Form.Group>
            <Form.Group controlId="ContactForm.SubmitButton">
                <Button className="ContactForm-button" type="submit" size="lg" >
                    Submit
                </Button>
            </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ContactForm;