import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Swal from 'sweetalert2';


export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch("https://alibot.ir/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charsest=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    setFormDetails(formInitialDetails);

    if (response.ok) {
      const data = await response.json()
      console.log("Data: ", data)
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Message sent successfully!',
      })
    }

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input id="fname" dir="auto" type="text" value={formDetails.firstName} placeholder="First Name: " onChange={(e) => {onFormUpdate('firstName', e.target.value)}}
                       onBlur={(e) => {
                        const thiso = document.getElementById("fname")
                        thiso.className = ""
                      }} required onInvalid={(e) => {
                        const thiso = document.getElementById("fname")
                        thiso.className = "animate__animated animate__headShake"
                        }} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="lname" dir="auto" type="text" value={formDetails.lastName} placeholder="Last Name: " onChange={(e) => onFormUpdate('lastName', e.target.value)}                       onBlur={(e) => {
                        const thiso = document.getElementById("lname")
                        thiso.className = ""
                      }} required onInvalid={(e) => {
                        const thiso = document.getElementById("lname")
                        thiso.className = "animate__animated animate__headShake"
                        }} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="email" dir="auto" type="email" value={formDetails.email} placeholder="Email Address: " onChange={(e) => onFormUpdate('email', e.target.value)}                        onBlur={(e) => {
                        const thiso = document.getElementById("email")
                        thiso.className = ""
                      }} required onInvalid={(e) => {
                        const thiso = document.getElementById("email")
                        thiso.className = "animate__animated animate__headShake"
                        }} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input id="tel" dir="auto" type="tel" value={formDetails.phone} placeholder="Phone Number: " onChange={(e) => onFormUpdate('phone', e.target.value)} 
                        onBlur={(e) => {
                        const thiso = document.getElementById("tel")
                        thiso.className = ""
                      }} required onInvalid={(e) => {
                        const thiso = document.getElementById("tel")
                        thiso.className = "animate__animated animate__headShake"
                        }} />
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea style={{ resize: "none" }} id="message" dir="auto" rows="6" value={formDetails.message} placeholder="Message:" onChange={(e) => onFormUpdate('message', e.target.value)} 
                        onBlur={(e) => {
                        const thiso = document.getElementById("message")
                        thiso.className = ""
                      }} required onInvalid={(e) => {
                        const thiso = document.getElementById("message")
                        thiso.className = "animate__animated animate__headShake"
                        }} ></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                    }
                  </Row>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}