import { Col, Container, Row } from "react-bootstrap";
const Engagement = () => {
  return (
    <div className="services-body rubik-regular">
      <img
        className="services-bg-img"
        src={require("../Assets/imgs/bg img/Asset 5 1.png")}
      />
      <Container>
        <div className="services-heading-container">
          <h1 className="services-heading">SERVICES</h1>
          <div className="services-hr-top">
            <div className="services-hr-bottom"></div>
          </div>
        </div>
      </Container>
      <Container>
        <Row className="Service-Engagement-body">
          <Col className="Engagement-body" sm="12" md="12" lg="6">
            <h1 className="Services-Engagement-heading">Engagement</h1>
            <p className="Services-Engagement-paragraph">
              We love what we do and are driven by achieving great results for
              our clients. Our awards and impressive client list are testament
              to our high quality approach. We deliver value, creaKvity, results
              and excepKonal levels of customer service and professionalism. We
              specialise in infrastructure development, energy and natural
              resources.
            </p>
          </Col>
          <Col
            className="Services-Engagement-img-container"
            sm="12"
            md="12"
            lg="6"
          >
            <img
              className="Services-Engagement-img"
              src={require("../Assets/imgs/servicesImg/Engagement vector 1.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Engagement;
