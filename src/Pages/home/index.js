import React from "react";
import HomeAboutSection from "../../Components/Sections/homeAboutsection";
import HomeHeroSection from "../../Components/Sections/homeHeroSection";
import { heroImage } from "../../Constant/ImagePath";
import classes from "./home.module.css";
function Home() {
  return (
    <main className={classes.main}>
      <div className={classes.background}>
        <img src={heroImage} />
      </div>
      <HomeHeroSection />
      <HomeAboutSection />
    </main>
  );
}

export default Home;
