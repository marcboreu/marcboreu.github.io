import React from "react";
import { Row, Col } from "react-flexbox-grid";
import TeamBox from './teamBox';
import MarcBoreu from '../../assets/pictures/marcboreu.jpg'
import Title from "../ui-components/title/title";
import Person01 from "../../assets/about/person01.png";
import Person02 from "../../assets/about/person02.png";
import Button from '../ui-components/button/button';

const about = () => (

        <div id="about">
            <div className="wrapper">
              <Title title="SOBRE MI" />
                  <p className="font12">
                      Desarrollador, diseñador y emprendedor. Acabo de terminar un bootcamp de desarrollo web y estoy empezado otro. Tengo buen ojo para el diseño y una sólida ética de trabajo. No me canso de aprender e innovar constantemente. Con experiencia en diseño y dotes comerciales, me veo a mí mismo como desarrollador Front-End y en un futuro aspiro a ser Full-Stack. Me defino como motero, desde bien pequeño. Mis otras pasiones son el snowboard, la naturaleza, el yoga, la gastronomía y por supuesto viajar. <br/><br/><cite>Cuanto más creo conocer, más me doy cuenta que no se nada.</cite></p>
            </div>
            <Button label="ENVIAR MENSAJE" target={"contact"} />
              <Row>
                <Col md={12} lg={4}>
                  <TeamBox avatar={Person01} name="Luke Skywalker" job="Web designer" />
                </Col>
                <Col md={12} lg={4}>
                  <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
                </Col>
                <Col md={12} lg={4}>
                <div className="hero-image">
                    <img src={MarcBoreu} alt="Marc Boreu" />
                  </div>
                </Col>
              </Row>
            </div>
);

export default about;
