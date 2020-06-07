import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Footer Content</h5>
            <p>
              Facebook
            </p>
            <p>
              Instagram
            </p>
            <p>
              Email
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Useful Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Blog</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Our Products</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          ABN: 41 824 753 556
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;