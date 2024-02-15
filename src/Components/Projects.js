import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const Projects = () => {
  return (
    <div className="project-main-body">
      <img
        className="project-bg-img"
        src={require("../Assets/imgs/bg img/Asset 8 2.png")}
      />
      <Container>
        <div className="services-heading-container">
          <h1 className="services-heading">OUR PROJECTS</h1>
          <div className="project-hr-top">
            <div className="project-hr-bottom"></div>
          </div>
        </div>
      </Container>
      <Container>
        <Row className="project-img-container">
          <Col className="project-img-1-container">
            <img
              src={require("../Assets/imgs/TeamAndProjectImg/Our Project_ 1 img 1.png")}
              className="project-img-1"
            />
          </Col>
          <Col>
            <Row className="project-img-2-3-container">
              <Col className="project-img-2-3-container-col">
                <img
                  src={require("../Assets/imgs/TeamAndProjectImg/Our Project _ 2 img 1.png")}
                  className="project-img-2"
                />
              </Col>
              <Col className="project-img-2-3-container-col">
                <img
                  src={require("../Assets/imgs/TeamAndProjectImg/Our Project_ 3 img 1.png")}
                  className="project-img-3"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
