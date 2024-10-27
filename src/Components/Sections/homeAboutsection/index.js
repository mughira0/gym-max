import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bodyBuilderImage from "../../../Assets/Images/bodybuilder.jpg";
import Button from "../../Core/Button";
import classes from "./homeAboutSection.module.css";
function HomeAboutSection({ image = bodyBuilderImage }) {
  return (
    <div className={classes.main}>
      <Container>
        <Row>
          <Col lg={6} md={12}>
            <div className={classes.content}>
              <h5>About Us</h5>
              <h1>Best platform for online learning</h1>
              <p>
                We are the best gym in the world. We are here to help you
                achieve your goals.
              </p>
              <div className={classes.button}>
                {" "}
                <Button
                  label="Get Started"
                  className={classes.button}
                  variant="secondary"
                  onClick={() => {}}
                />
              </div>
            </div>
          </Col>

          <Col lg={6} md={12}>
            <div className={classes.image}>
              <img src={image} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeAboutSection;
