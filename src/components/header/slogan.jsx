
import React from 'react';
import Bounce from 'react-reveal/Bounce';

class Slogan extends React.Component {
  render() {
    return (
        <Bounce cascade>
          <p className="font18 slogan">
            Es fácil cuando haces algo que te encanta
          </p>
        </Bounce>
    );
  }
}

export default Slogan;
