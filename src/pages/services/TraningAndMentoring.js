import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TraningAndMentoring = () => {
  return (
    <div className="Traning-body-main">
      <img
        className="Traning-bg-img"
        src={require("../../imgs/bg img/Asset 8 2.png")}
      />
      <Container>
        <Row className="Service-Traning-body">
          <Col className="Traning-body" sm="12" md="12" lg="6">
            <h1 className="Services-Traning-heading">TRANING & MENTORING</h1>
            <p className="Services-Traning-paragraph">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </Col>
          <Col
            className="Services-Traning-img-container"
            sm="12"
            md="12"
            lg="6"
          >
            <img
              className="Services-Traning-img"
              src={require("../../imgs/servicesImg/Training and vector 1.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TraningAndMentoring;
