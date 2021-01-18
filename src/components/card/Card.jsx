import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Portfolio from "../portfolio/portfolio";
import Skills from "../skills/Skills";
import About from "../about/about";
import Blog from "../blog/blog";
import Contact from "../contact/contact";



const Card = () => (
  <div className="card-container">
    <div className="card">
      <Row>
        <Col xs={12}>
        <Portfolio />
          <Skills />
          <About />
          <Blog />
          <Contact />
        </Col>
      </Row>
    </div>
  </div>
);
export default Card;
