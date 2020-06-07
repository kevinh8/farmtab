import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {


  render() {
    return (
      <div className="NavigationBar">
            <Navbar expand="lg" variant="light" bg="white">
                <Navbar.Brand href="#">FarmTab</Navbar.Brand>
            </Navbar>
      </div>
    );
  }
}

export default NavigationBar;