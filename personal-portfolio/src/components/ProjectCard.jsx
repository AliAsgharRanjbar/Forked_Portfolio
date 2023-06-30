import { Col } from "react-bootstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export const ProjectCard = ({ title, description, imgUrl }) => {

useEffect(() => {
  AOS.init({ duration: 1000 });
  AOS.refresh();
}, [])

  return (
    <Col size={12} sm={6} md={4} data-aos="fade-down"  data-aos-anchor-placement="center-bottom">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}