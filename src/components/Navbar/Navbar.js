import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";

const Navbar = ({ LoggedOut }) => {
  const [toggle, settoggle] = useState(false);

  const loggedout = (e) => {
    LoggedOut();
  };

  const updateElements = (e) => {
    if (toggle) {
      document.getElementById("nav_container").style.height = "auto";
      const elements = document.getElementsByClassName("nav-link");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "block";
      }
      settoggle(false);
    } else {
      document.getElementById("nav_container").style.height = "auto";
      const elements = document.getElementsByClassName("nav-link");
      for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
      }
      settoggle(true);
    }
  };

  window.addEventListener("scroll", function () {
    var navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <nav id="nav_container" className="navbar">
      <div className="logo">
        हमाओ<span>बुंदेलखंड</span>
      </div>
      <div id="nav-links_list" className="nav-links">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="translate"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Translate
        </Link>
        <Link
          activeClass="active"
          to="learn"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Learn
        </Link>
        <Link
          activeClass="active"
          to="tourism"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Tourism
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="nav-link"
        >
          Contact
        </Link>
        <button className="loggedoutbtn" onClick={loggedout}>
          LogOut
        </button>
        <button className="loggedoutbtn_icon" onClick={loggedout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </button>
        <button className="menu" onClick={updateElements}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
