import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Techstack from "./Techstack";
import { SKILLS, TOOLS } from "../../Constants";

function Skills() {
  return (
    <Container fluid className="about-section">
      <div style={{ marginBottom: "20px" }}>
        <img
          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
          width="130px"
          height="40px"
          alt=""
        />{" "}
        <img
          style={{ marginLeft: "10px" }}
          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
          width="130px"
          height="40px"
          alt=""
        />
        <img
          style={{ marginLeft: "10px" }}
          src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
          width="130px"
          height="40px"
          alt=""
        />
        <img
          style={{ marginLeft: "10px" }}
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          width="130px"
          height="40px"
          alt=""
        />{" "}
        <img
          style={{ marginLeft: "10px" }}
          src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"
          width="130px"
          height="40px"
          alt=""
        />
        <img
          style={{ marginLeft: "10px" }}
          src="https://img.shields.io/badge/Material%20UI-007FFF?style=for-the-badge&logo=mui&logoColor=white"
          width="130px"
          height="40px"
          alt=""
        />{" "}
        <img
          style={{ marginLeft: "10px" }}
          src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
          width="130px"
          height="40px"
          alt=""
        />
      </div>
      <Container>
        <Row className="skill-tools-wrapper">
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              Professional <strong className="purple">Skillset </strong>
            </h1>
            {SKILLS.map((skill, index) => (
              <Techstack
                name={skill.name}
                initialRating={skill.initialRating}
                key={index}
              />
            ))}
          </Col>
          <Col className="skill-wrapper">
            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            {TOOLS.map((tool, index) => (
              <ul key={index} className="tool-name">
                <li>{tool}</li>
              </ul>
            ))}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Skills;
