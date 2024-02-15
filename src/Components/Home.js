import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <div className="home-body">
      <Container>
        <Row>
          <Col md="12" lg="6">
            <img
              className="home-left-foot"
              src={require("../Assets/imgs/bg img/Assets 3.png")}
            />
            <img
              className="home-bg-cloud"
              src={require("../Assets/imgs/bg img/Graphic 1 2.png")}
            />
            <img
              className="home-vector"
              src={require("../Assets/imgs/bg img/Vector Smart Object21 1 (1).png")}
            />
          </Col>
          <Col className="home-col-2" xs md="12" lg="6">
            <div>
              <span className="home-heading rubik-regular">Mendleson</span>
              <br />
              <span className="home-heading rubik-regular">Communication</span>
              <br />
              <span className="home-heading rubik-regular">and Engagement</span>
            </div>
            <div>
              <p className="home-peragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Malesuada sed ipsum, ut quam volutpat, tortor.
              </p>
            </div>
            <img
              className="home-rigth-foot"
              src={require("../Assets/imgs/bodyImg/Assets 4.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
