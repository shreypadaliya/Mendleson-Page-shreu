import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-body">
      <div className="footer-links-body">
        <div className="footer-social">
          <h3 className="social-heading">Social</h3>
          <div className="social-links">
            <a href="#" className="social-link">
              <img
                src={require("../imgs/Footer img/facebook 1.png")}
                alt=""
                className="facebook-icon"
              />
              <span className="facebook footer-para ">Facebook</span>
            </a>
            <a href="#" className="social-link">
              <img
                src={require("../imgs/Footer img/linkedin 1.png")}
                alt=""
                className="linked-icon"
              />
              <span className="linked footer-para ">Linkedin</span>
            </a>
            <a href="#" className="social-link">
              <img
                src={require("../imgs/Footer img/Group 20.png")}
                alt=""
                className="google-icon"
              />
              <span className="google footer-para ">Google +</span>
            </a>
          </div>
        </div>
        <div className="explore">
          <h3 className="explore-heading">Explore</h3>
          <div className="explore-links">
            <a href="" className="explore-link">
              <span className="Services footer-para ">Services</span>
            </a>
            <a href="" className="explore-link">
              <span className="Team footer-para ">Team</span>
            </a>
            <a href="" className="explore-link">
              <span className="Clients footer-para ">Clients</span>
            </a>
          </div>
        </div>
        <div className="contact">
          <h3 className="contact-heading">Contact</h3>
          <div className="contact-adress">
            <span className="footer-para ">Lorem Ipsum dummy address</span>
            <span className="footer-para ">used for display</span>
            <span className="footer-para ">1234567890</span>
          </div>
        </div>
        <div className="email">
          <h3 className="email-heading">Email</h3>
          <div className="email-id footer-para ">
            mendlesoncommunication@email.com
          </div>
        </div>
      </div>
      <div className="footer-copy-body">
        <span>© Copyright 2018 Mendleson Communication Pty Ltd </span>
      </div>
    </div>
  );
};

export default Footer;
