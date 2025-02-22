import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "web developer", "gamer", "coder", "philomath!" ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Welcome, Happy to see you here :&#41; </span>
                <h1>Hi! <br/> I'm AliAsghar Ranjbar <br/> <span className="txt-rotate" data-rotate='[ "web developer", "gamer", "programmer", "philomath!", "coder" ]'><span className="wrap">{text}</span></span></h1>
                  <p>as you can see above, my name is AliAsghar Ranjbar,
                     I live in Yazd, <b><i>Iran </i></b> &#127470;&#127479;❤️ .
                     I'm a computer engineering student at
                      <a href="https://yazd.ac.ir/" className="uni-link"> Yazd university</a>, 
                      with a focus on software engineering.
                       I always try to be a good listener and learn from everthing.
                       I'm currently working on developing my programming skills.
                       </p>
                  <button  onClick={() => console.log("connect")}><a href="#connect" className="secondConnect">Let’s Connect</a><a href="#connect" className="secondConnect"><ArrowRightCircle size={25} /></a></button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}