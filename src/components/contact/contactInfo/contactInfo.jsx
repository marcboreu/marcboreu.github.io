import React from "react";
import { Row, Col } from "react-flexbox-grid";
import ContactInfoBox from "../contactInfo/contactInfoBox";
import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="08025, Eixample"
            textLine2="Barcelona"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon2}
            textLine1="+34 &nbsp; 680 - 823 - 072"
          />
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="marcboreu@gmail.com"
          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
