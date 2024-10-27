import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  influencer1,
  influencer2,
  influencer3,
} from "../../../Constant/ImagePath";
import InfluencerCard from "../../PageComponents/InfluencerCard";
import classes from "./homeSection.module.css";
function HomeCardSection({ item = defaultArray }) {
  return (
    <div className={classes.main}>
      <div>
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <div className={classes.content}>
                <h5> {item?.title || "Classes"}</h5>
                <h1>
                  {item?.subtitle || "Discover a diverse array of experiences"}
                </h1>
              </div>
            </Col>
            <Col lg={12} md={12}>
              <div className={classes.influencer}>
                <Row>
                  {item?.influencers?.map((item, index) => (
                    <Col key={index} lg={4} md={12}>
                      <InfluencerCard key={index} item={item} />
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default HomeCardSection;
const defaultArray = {
  id: 1,
  title: "Classes",
  subtitle: "Discover a diverse array of experiences",
  influencers: [
    {
      id: 1,
      title: "Emily Doe",
      image: influencer1,
      position: "Trainer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      title: "John Doe",
      image: influencer2,
      position: "Trainer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      title: "Jane Doe",
      image: influencer3,
      position: "Trainer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ],
};
