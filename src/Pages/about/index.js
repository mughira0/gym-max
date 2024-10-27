import React from "react";
import Footer from "../../Components/Core/Footer";
import NavBar from "../../Components/Core/NavBar";
import ScrollToTopButton from "../../Components/Core/ScrollToTop";
import HomeAboutSection from "../../Components/Sections/homeAboutsection";
import HomeCardSection from "../../Components/Sections/homeCardSection";
import HomeHeroSection from "../../Components/Sections/homeHeroSection";
import { aboutBodybuilder, aboutHeroBack } from "../../Constant/ImagePath";
import classes from "./about.module.css";
function About() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.background}>
          <img src={aboutHeroBack} />
        </div>
        <NavBar />
        <HomeHeroSection
          item={{
            heading: "We are the finest Team in the World",
            subtitle: "About Us",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          }}
        />
        <HomeAboutSection image={aboutBodybuilder} />
        <HomeCardSection />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default About;
