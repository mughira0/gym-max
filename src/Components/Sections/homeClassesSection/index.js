import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./homePackageSection.module.css";
function HomePackageSection() {
  return (
    <div className={classes.main}>
      <Container>
        <Row>
          <Col lg={12} md={12}>
            <div className={classes.content}>
              <h5>Classes</h5>
              <h1>Discover a diverse array of experiences</h1>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePackageSection;
