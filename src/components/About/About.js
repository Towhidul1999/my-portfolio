import React from "react";
import emailjs from 'emailjs-com';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_buftgmp', 'template_i9vjjek', e.target, 'user_J2luXDhuEQdodYrpbSNQh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px"}}
            className="about-img"
          >
            <h2>Contract me</h2>
            {/* <img src={laptopImg} alt="about" className="img-fluid" /> */}
            <form className="contact-form" onSubmit={sendEmail}>
              {/* <input type="hidden" name="contact_number" /> */}
              <br></br>
              <label>Name</label>
              <br></br>
              <input type="text" name="name" />
              <br></br>
              <label>Email</label>
              <br></br>
              <input type="email" name="email" />
              <br></br>
              <label>Message</label>
              <br></br>
              <textarea name="message" />
              <br></br>
              <input type="submit" value="Send" />
            </form>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skill </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* <Techstack iconName="devicon-cplusplus-line" />
          <Techstack iconName="devicon-python-plain-wordmark " />
          <Techstack iconName="cib-pytorch" />
          <Techstack iconName="cib-tensorflow" /> */}
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-mongodb-plain-wordmark" />

          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
        </Row>
        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* <Techstack iconName="devicon-linux-plain" /> */}
          <Techstack iconName="cib-visual-studio-code" />
          {/* <Techstack iconName="cib-anaconda" /> */}
          <Techstack iconName="cib-postman" />
          {/* <Techstack iconName="cib-zeit" /> */}
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="cib-heroku" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;
