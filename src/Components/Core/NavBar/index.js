import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./navbar.module.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>GYM LAG</div>
      <ul
        className={`${classes.navLinks} ${isMenuOpen ? classes.showMenu : ""}`}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
      <div className={classes.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default NavBar;
