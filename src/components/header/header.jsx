import React from "react";
import { Row, Col } from "react-flexbox-grid";
import Button from '../ui-components/button/button';
import Slogan from "./slogan";
import Subtitle from "./subtitle";
import Title from "./title";


const header = () => (
  <div className="header" id="header">
      <Row>
        <Col sm={12}>
          <div className="header-container">
            <div className="header-items">
            <Col md={6}>
                <Title/>
                <Subtitle/>
                <Slogan/>
            </Col>
            <Col md={6}/>
            <div className="buttons-header">
              <Button label="DESCARGAR CV" link={"../../assets/pictures/CV-MarcBoreu-ESP.pdf"}/>
              <Button label="ACERCA DE MI" target={"about"} />
            </div>
            </div>
          </div>
        </Col>
      </Row>
  </div>
);

export default header;
