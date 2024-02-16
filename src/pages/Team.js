import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Team = () => {
  return (
    <div className="team-main-body" id="Team">
      <img
        className="team-bg-img"
        src={require("../imgs/bg img/Asset 5 1.png")}
      />
      <Container>
        <div className="services-heading-container">
          <h1 className="services-heading">OUR TEAM</h1>
          <div className="team-hr-top">
            <div className="team-hr-bottom"></div>
          </div>
        </div>
      </Container>
      <Container>
        <Row className="our-team-body rubik-regular">
          <Col sm="12" md="12" lg="4" className="team-member">
            <img
              src={require("../imgs/TeamAndProjectImg/Person 1 img 1.png")}
              className="out-team-img"
            />
            <p className="our-team-paragraph">Jessica D’suza</p>
          </Col>
          <Col sm="12" md="12" lg="4" className="team-member">
            <img
              src={require("../imgs/TeamAndProjectImg/Person 2 img 1.png")}
              className="out-team-img"
            />
            <p className="our-team-paragraph">Johny Williams</p>
          </Col>
          <Col sm="12" md="12" lg="4" className="team-member">
            <img
              src={require("../imgs/TeamAndProjectImg/Person 3 img 1.png")}
              className="out-team-img"
            />
            <p className="our-team-paragraph">Sanya R,</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Team;
