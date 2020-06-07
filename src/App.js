import React, {Component} from 'react';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap';
import ContactForm from './components/contactform/ContactForm';
import InstagramPost from './components/instagram-post/InstagramPost';
import NavigationBar from './components/navigationbar/NavigationBar';
import Jumbo from './components/jumbo/Jumbo';
import FooterPage from './components/footer-page/FooterPage';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <NavigationBar />
            </Col>
          </Row>
          <Row className="bg-opacity">
            <div className="content">
              <Jumbo />
            </div>
          </Row>
          <Row>
            <Col md={{ span: 5, offset: 1 }}>
              <br></br>
              <h1 className="message-title">
                <b>
                  Organically derived.
                </b>
              </h1>
            </Col>
            <Col md={{ span: 5, offset: 0 }}>
              <br></br>
              <p className="message">
                FarmTab is short for farm to table because we close the distance between farms to your restaurant tables. By growing organic produce in an urban setting, we are able to ensure freshness and speed with every delivery.
              </p>
              <br></br>
              <p className="message">
                When you want the same value for less, our service is the answer. The production starts with clean traceable seeds grown in optimal conditions which results in nutrient dense produce. Our microgreens are organically concentrated meaning they contain, higher mineral and antioxidant levels than the same quantity of mature greens.
              </p>
              <br></br>
            </Col>
          </Row>
          <Row className="contact-row">
            <Col md={{ span: 5, offset: 2 }}>
              <h1 className="ContactForm-heading">Get in touch with us!</h1>
            </Col>
          </Row>
          <Row className="contact-row">
            <Col md={{ span: 5, offset: 2 }}>
              <ContactForm />
            </Col>
            <Col md={{ span: 2, offset: 1 }}>
              <InstagramPost />
            </Col>
          </Row>
          <Row>
            <Col>
              <FooterPage />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;