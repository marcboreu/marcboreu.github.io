import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { Link } from "react-scroll";
import Logo from '../../assets/navbar/logogreen.png';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

const partnerBox = () => (
  <div className="footer">
    <div className="wrapper">
        <Col xs={2} md={4}>
            <img className="footer-logo" src={Logo} width="100px" alt="logo" />
        </Col>
        <Col xs={7} md={6}>
            <p className="footer-copyright">© {new Date().getFullYear()} - Derechos reservados</p>
            <p className="footer-copyright2">Desarrollado por Marc Boreu</p>
        </Col>
        <Col xs={3} md={2}>
          <Link to="header" spy={true} smooth={true} offset={0} duration={500}>
            <div className="footer-box back-to-top small__button">
              <button className="scroll-up" aria-label="send message" value="Ir Arriba">
                <ExpandLessIcon/>
              </button>
            </div>
          </Link>
        </Col>
    </div>
  </div>
);
export default partnerBox;
