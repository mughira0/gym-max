import React from "react";
import { Container } from "react-bootstrap";
import Button from "../../Core/Button";
import classes from "./homeHeroSection.module.css";
function HomeHeroSection() {
  return (
    <div className={classes.main}>
      <Container>
        <div className={classes.content}>
          <h5>Unleash your potential</h5>
          <h1>YOUR HEALTH IS OUR FIRST PRIORITY</h1>
          <p>
            Our platform offers one-on-one tutoring for your body and mind.
            Let's make learning easier together.
          </p>
          <div className={classes.button}>
            {" "}
            <Button
              label="Get Started"
              className={classes.button}
              onClick={() => {}}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeHeroSection;
