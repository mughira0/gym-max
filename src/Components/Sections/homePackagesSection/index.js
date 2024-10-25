import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PackageCard from "../../PageComponents/packageCard/index,";
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
          {PackageArray.map((item, index) => {
            return (
              <Col lg={4} md={12}>
                <PackageCard key={index} index={index} item={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default HomePackageSection;

const PackageArray = [
  {
    type: "monthly",
    price: 9.99,
    title: "Starter",
    perks: ["1 Free Trial", "Partner Discount", "Expert Support"],
  },
  {
    type: "yearly",
    price: 19.99,
    title: "Premium",
    perks: ["1 Free Trial", "Partner Discount", "Expert Support"],
  },
  {
    type: "yearly",
    price: 99.99,
    title: "Premium",
    perks: ["1 Free Trial", "Partner Discount", "Expert Support"],
  },
];
