import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";
import email from "../assets/img/email.svg";
import phone from "../assets/img/phone.svg";
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
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

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
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
      <Navbar id="navbar" expand="md" className={scrolled  ? "scrolled" : ""} onToggle={() => {
        let bg = document.getElementById("navbar").style.backgroundColor
        bg === "" ? document.getElementById("navbar").style = `background: transparent;  backdrop-filter: blur(10px);` : document.getElementById("navbar").style = ""
      }}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Nav className="ms-auto">
              <Nav.Link href="#home" className="home nav-link" onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className="skills nav-link" onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className="projects nav-link" onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav> */}
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
              <a href="https://www.linkedin.com/in/aliasgharranjbar/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://t.me/RanjbarAliAsghar"><img src={telegram} alt="Icon" /></a>
              <a href="https://github.com/AliAsgharRanjbar"><img src={github} alt="Icon" /></a>
              <a href="mailto:me@alibot.ir?body=THIS EMAIL WAS SENT FROM THE VISITOR OF ALIBOT.IR"><img src={email} alt="Icon" title="email" /></a>
              <a href="tel:+989162603646"><img src={phone} alt="Icon" title="phone" /></a>
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
