import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Container>
        <div className="footer-body">
          <Row className="footer-body-links">
            <Col lg="3">
              <div>
                <p className="footer-body-heading footer-social">Social</p>
                <a className="footer-company">
                  <img
                    src={require("../Assets/imgs/Footer img/facebook 1.png")}
                  />
                  <p className="footer-links-para">Facebook</p>
                </a>
                <a className="footer-company">
                  <img
                    src={require("../Assets/imgs/Footer img/linkedin 1.png")}
                  />
                  <p className="footer-links-para">Linkedin</p>
                </a>
                <a className="footer-company">
                  <img
                    src={require("../Assets/imgs/Footer img/Group 20.png")}
                  />
                  <p className="footer-links-para">Google +</p>
                </a>
              </div>
            </Col>
            <Col lg="3">
              {" "}
              <div>
                <p className="footer-body-heading">Explore</p>
                <div className="footer-expore">
                  <a className="footer-explore">
                    <p className="explore-footer-para">Services</p>
                  </a>
                  <a className="footer-explore">
                    <p className="explore-footer-para">Team</p>
                  </a>
                  <a className="footer-explore">
                    <p className="explore-footer-para">Clients</p>
                  </a>
                </div>
              </div>
            </Col>
            <Col lg="3">
              <div>
                <p className="footer-body-heading">Contact</p>
                <p className="contact-para">Lorem Ipsum dummy address </p>
                <p className="contact-para">used for display</p>
                <p className="contact-para">1234567890</p>
              </div>
            </Col>
            <Col lg="3">
              <div>
                <p className="footer-body-heading">Email</p>
                <p className="footer-email">mendlesoncommunication@email.com</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Container>
        <div className="footer-copy">
          <p>
            <span>© Copyright 2018</span> Mendleson Communication Pty Ltd{" "}
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
