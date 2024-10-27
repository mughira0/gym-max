import {
  MDBCol,
  MDBContainer,
  MDBFooter,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import React from "react";

export default function Footer() {
  return (
    <MDBFooter
      bgColor="transparent"
      className="text-center text-lg-start text-muted"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Connect with us on social media:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="dumbbell" className="me-3" />
                Gym Lag
              </h6>
              <p>
                Join us at Gym Lag to experience top-notch facilities,
                professional trainers, and a community that supports your
                fitness goals.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Programs</h6>
              <p>
                <a href="#!" className="text-reset">
                  Personal Training
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Group Classes
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Nutrition Plans
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Online Coaching
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
              <p>
                <a href="#!" className="text-reset">
                  Membership
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Trainers
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Facilities
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  Support
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                USA , New York
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@gymlag.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> +92 335 2668377
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
      >
        © 2024 Copyright:{" "}
        <a className="text-reset" href="https://gymlag.com/">
          GymLag.com
        </a>
      </div>
    </MDBFooter>
  );
}
