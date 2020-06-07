import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './Jumbo.css';

class Jumbo extends Component {

  render() {
    return (
      <div className="Jumbo">
            <h1 className="Jumbo-heading">
                Farm to table.
            </h1>
            <br></br>
            <p className="Jumbo-message">
                Delivering fresh, local produce from our farm to your tables.
            </p>
            <br></br>
            <p>
                <Button className="Jumbo-button">Our products</Button>
            </p>
      </div>
    );
  }
}

export default Jumbo;