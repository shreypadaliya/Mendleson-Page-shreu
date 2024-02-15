import { Col, Container, Row } from "react-bootstrap";

const Facilitation = () => {
  return (
    <div className="Facilitation-body-main">
      <img
        className="Facilitation-bg-img"
        src={require("../Assets/imgs/bg img/Asset 7 1.png")}
      />
      <Container>
        <Row className="Service-Facilitation-body">
          <Col className="Facilitation-body" sm="12" md="12" lg="6">
            <h1 className="Services-Facilitation-heading">Facilitation</h1>
            <p className="Services-Facilitation-paragraph">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </Col>
          <Col
            className="Services-Facilitation-img-container"
            sm="12"
            md="12"
            lg="6"
          >
            <img
              className="Services-Facilitation-img"
              src={require("../Assets/imgs/servicesImg/facilation vector 1.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Facilitation;
