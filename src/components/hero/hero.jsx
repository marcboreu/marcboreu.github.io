import React from "react";
import { Row, Col } from "react-flexbox-grid";
import MarcBoreu from '../../assets/pictures/marcboreu.jpg';
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Marc Boreu</h1>
            <h6 className="weight300 font24">FrontEnd Developer</h6>
            <p className="font12">
              Desarrollador, diseñador y emprendedor. Acabo de terminar un bootcamp de desarrollo web y estoy empezado otro. Tengo buen ojo para el diseño y una sólida ética de trabajo. No me canso de aprender e innovar constantemente. Con experiencia en diseño y dotes comerciales, me veo a mí mismo como desarrollador Front-End y en un futuro aspiro a ser Full-Stack. Me defino como motero, desde bien pequeño. Mis otras pasiones son el snowboard, la naturaleza, el yoga, la gastronomía y por supuesto viajar. <br/><br/><cite>Cuanto más creo conocer, más me doy cuenta que no se nada.</cite></p>
            <Button label="ENVIAR MENSAJE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={MarcBoreu} alt="Marc Boreu" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
