import { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";
import email from "../assets/img/email.svg";
import phone from "../assets/img/phone.svg";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import { HamburgerMenu } from "./HamburgerMenu";



export const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Tracking the scroll and highlighting the navbar item accordingly
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll("nav ul li");
  window.onscroll = () => {
    var current = "";
  
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (pageYOffset >= sectionTop - 80) {
        current = section.getAttribute("id"); }
    });
  
    navLi.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
  return (
    <Router>
      <Navbar id="navbar" expand="lg" className={scrolled  ? "scrolled" : ""} onToggle={() => {       // Handle visibility of Navbar on expanded state
        let bg = document.getElementById("navbar").style.backgroundColor
        bg === "" ? document.getElementById("navbar").style = `background: transparent;  backdrop-filter: blur(10px);`
        : document.getElementById("navbar").style = ""
      }}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span>
          <HamburgerMenu />
          </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
                <nav className="ms-auto">
                    <div className="container">
                      <ul>
                          <li className="home active navbar-link"><a href="#home">Home</a></li>
                          <li className="skills navbar-link"><a href="#skills">Skills</a></li>
                          <li className="projects navbar-link"><a href="#projects">Projects</a></li>
                      </ul>
                    </div>
                </nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/aliasgharranjbar/"><img src={linkedin} alt="LinkedIn icon" /></a>
              <a href="https://t.me/RanjbarAliAsghar"><img src={telegram} alt="Telegram icon" /></a>
              <a href="https://github.com/AliAsgharRanjbar"><img src={github} alt="GitHub icon" /></a>
              <a href="mailto:me@alibot.ir?body=THIS EMAIL WAS SENT FROM THE VISITOR OF ALIBOT.IR"><img src={email} alt="Email icon" title="email" /></a>
              <a href="tel:+989162603646"><img src={phone} alt="Phone icon" title="phone" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}