import React from "react";
import Footer from "../../Components/Core/Footer";
import NavBar from "../../Components/Core/NavBar";
import ScrollToTopButton from "../../Components/Core/ScrollToTop";
import HomeAboutSection from "../../Components/Sections/homeAboutsection";
import HomeCardSection from "../../Components/Sections/homeCardSection";
import HomeHeroSection from "../../Components/Sections/homeHeroSection";
import {
  aboutHeroBack,
  abouthero,
  bodybuilde3,
  bodybuilder1,
  bodybuilder2,
} from "../../Constant/ImagePath";
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
        <HomeAboutSection image={abouthero} />
        <HomeCardSection item={defaultArray} />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default About;
const defaultArray = {
  id: 1,
  title: "Our Trainers",
  subtitle: "Meet the dedicated fitness experts",
  influencers: [
    {
      id: 1,
      title: "Emily Doe",
      image: bodybuilder1,
      position: "Trainer",
    },
    {
      id: 2,
      title: "John Doe",
      image: bodybuilde3,
      position: "Trainer",
    },
    {
      id: 3,
      title: "Jane Doe",
      image: bodybuilder2,
      position: "Trainer",
    },
  ],
};
