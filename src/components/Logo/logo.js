import React from 'react';
import logo from './logo.png';
import Tilt from 'react-tilt';
import './logo.css';


const Logo = () => {
  return (
    <div className="ma4 mt12">
      <Tilt className="Tilt br1" style={{ height: 120, width: 200 }}>
        <div className="Tilt-inner pa3">
          <img style={{ paddingTop: "15 px" }} alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;