import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { makeStyles } from "@material-ui/core/styles";
import Logo from '../../assets/logo/logoMarcBoreu-black.png';

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

// import styles from "assets/jss/material-kit-react/components/footerStyle.js";
import styles from "../../assets/styles/material-kit-react/components/footerStyle";

const useStyles = makeStyles(styles);

export default function Footer(props) {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
            <img className="footer-logo" src={Logo} width="50px" alt="logo" />
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} | made with &nbsp;{" "}
          <Favorite className={classes.icon} />&nbsp; in BCN | by &nbsp;{" "}
          <a
            href="https://marcboreu.com"
            className={aClasses}
            target="_blank"
            rel="noreferrer"
          >
            Marc Boreu
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool
};
