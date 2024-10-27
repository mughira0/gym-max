import React from "react";
import { Container } from "react-bootstrap";
import Button from "../../Core/Button";
import classes from "./homeHeroSection.module.css";
function HomeHeroSection({ item }) {
  return (
    <div className={classes.main}>
      <Container>
        <div className={classes.content}>
          <h5>{item?.subtitle || "Unleash your potential"}</h5>
          <h1>{item?.heading || "Home Hero Section"}</h1>
          <p>
            {item?.description ||
              "Our platform offers one-on-one tutoring for your body and mind. Let's make learning easier together."}
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
