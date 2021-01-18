
import React from 'react';
import Zoom from 'react-reveal/Zoom';

class Subtitle extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h6 className="weight300 font24 subtitle-header">
        <Zoom classname="title-reveal-h1" left cascade>
          FrontEnd
        </Zoom>
        <Zoom cascade>
            &nbsp;
        </Zoom>
        <Zoom classname="title-reveal-h1" right cascade>
          Developer
        </Zoom>
      </h6>
      </React.Fragment>
    );
  }
}

export default Subtitle;
