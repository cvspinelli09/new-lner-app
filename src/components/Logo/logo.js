import React from 'react';
import logo from './lner.png';
import Tilt from 'react-tilt';
import './logo.css';


const Logo = () => {
  return (
    <div className="logo">
      <Tilt className="Tilt br1" style={{ width: 150 }}>
        <div>
          <img alt="logo" src={logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;