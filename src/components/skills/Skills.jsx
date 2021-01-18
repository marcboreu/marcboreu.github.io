import React from "react";
import Slides from './Slides';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Skills = () => (
  <div id="skills">
    <div className="wrapper">
      <div className="arrow-left">
        <ArrowBackIosIcon/>        
      </div>
      <Slides/>
      <div className="arrow-right">
        <ArrowForwardIosIcon/>
      </div>
    </div>
  </div>
);

export default Skills;
