import React from "react";
import Footer from "../../Components/Core/Footer";
import NavBar from "../../Components/Core/NavBar";
import ScrollToTopButton from "../../Components/Core/ScrollToTop";
import HomeJoinSection from "../../Components/Sections/HomeJoinSection";
import HomeAboutSection from "../../Components/Sections/homeAboutsection";
import HomeCardSection from "../../Components/Sections/homeCardSection";
import HomeHeroSection from "../../Components/Sections/homeHeroSection";
import HomePackageSection from "../../Components/Sections/homePackagesSection";
import {
  bodybuilde3,
  bodybuilder1,
  bodybuilder2,
  heroImage,
} from "../../Constant/ImagePath";
import classes from "./home.module.css";
function Home() {
  return (
    <>
      <main className={classes.main}>
        <div className={classes.background}>
          <img src={heroImage} />
        </div>
        <NavBar />
        <HomeHeroSection />
        <HomeAboutSection />
        <HomeCardSection />
        <HomePackageSection />
        <HomeJoinSection />
        <HomeCardSection item={defaultArray} />
        <Footer />
        <ScrollToTopButton />
      </main>
    </>
  );
}

export default Home;
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
