import { Container, Row, Col } from "react-bootstrap";
import linkedin from "../assets/img/linkedin.svg";
import github from "../assets/img/github.svg";
import telegram from "../assets/img/telegram.svg";
import email from "../assets/img/email.svg";
import phone from "../assets/img/phone.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aliasgharranjbar/"><img src={linkedin} alt="LinkedIn icon" /></a>
              <a href="https://t.me/RanjbarAliAsghar"><img src={telegram} alt="Telegram icon" /></a>
              <a href="https://github.com/AliAsgharRanjbar"><img src={github} alt="GitHub icon" /></a>
              <a href="mailto:me@alibot.ir?body=THIS EMAIL WAS SENT FROM THE VISITOR OF ALIBOT.IR"><img src={email} alt="Email icon" title="email" /></a>
              <a href="tel:+989162603646"><img src={phone} alt="Phone icon" title="phone" /></a>
            </div>
            <p>Copyleft <span class="copy-left">©</span> 2023. All Rights Ignored.</p>
            <span className="gitLogo"><a href="https://github.com/AliAsgharRanjbar/portfolio-v2"><img src={github} alt="Bigger GitHub icon" style={{ width: "50px"}} title="This portfolio is not mine *-*  I forked it."/></a></span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}