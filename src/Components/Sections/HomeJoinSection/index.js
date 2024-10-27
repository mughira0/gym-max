import React from "react";
import { Container } from "react-bootstrap";
import Button from "../../Core/Button";
import classes from "./homeJoinSection.module.css";
function HomeJoinSection() {
  return (
    <div className={classes.main}>
      <Container>
        <div className={classes.content}>
          <p>Join Today</p>
          <h5>Embark on your fitness journey with GymPro today!</h5>
          <p>
            Don't wait to embrace a healthier you – seize the opportunity and
            unlock your full potential
          </p>
          <div className={classes.button}>
            <Button label="Start Your Journey" onClick={() => {}} />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default HomeJoinSection;
