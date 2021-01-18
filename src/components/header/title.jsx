
import React from 'react';
import Zoom from 'react-reveal/Zoom';

class Title extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="font60 title-header">
        <Zoom classname="title-reveal-h1" left cascade>
          Marc
        </Zoom>
        <Zoom cascade>
            &nbsp;
        </Zoom>
        <Zoom classname="title-reveal-h1" right cascade>
          Boreu
        </Zoom>
      </h1>
      </React.Fragment>
    );
  }
}

export default Title;
