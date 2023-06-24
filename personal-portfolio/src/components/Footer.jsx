import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";
import email from "../assets/img/email.svg";
import phone from "../assets/img/phone.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aliasgharranjbar/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://t.me/RanjbarAliAsghar"><img src={telegram} alt="Icon" /></a>
              <a href="https://github.com/AliAsgharRanjbar"><img src={github} alt="Icon" /></a>
              <a href="mailto:me@alibot.ir?body=THIS EMAIL WAS SENT FROM THE VISITOR OF ALIBOT.IR"><img src={email} alt="Icon" title="email" /></a>
              <a href="tel:+989162603646"><img src={phone} alt="Icon" title="phone" /></a>



            </div>
            <p>Copyleft <span class="copy-left"> ©</span> 2023. All Rights Ignored.</p>
            <span className="gitLogo"><a href="https://github.com/AliAsgharRanjbar/portfolio-v2"><img src={github} alt="Icon" style={{ width: "50px"}} title="This portfolio is not mine *-*  I forked it."/></a></span>
            {/* <FontAwesomeIcon icon="fa-brands fa-github" spin size="2xs" /> */}

          </Col>
        </Row>
      </Container>
    </footer>
  )
}
