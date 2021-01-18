import React from "react";
import { Row, Col } from "react-flexbox-grid";
import FacebookIcon from "../../../assets/contact/facebook.svg";
import InstagramIcon from "../../../assets/contact/instagram.svg";
import LinkedinIcon from "../../../assets/contact/linkedin.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={3} lg={1} className="contact__social">
          <img src={FacebookIcon} alt="facebook" />
        </Col>
        <Col xs={3} lg={1} className="contact__social">
          <img src={InstagramIcon} alt="instagram" />
        </Col>
        <Col xs={3} lg={1} className="contact__social">
          <img src={LinkedinIcon} alt="Linkedin" />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
