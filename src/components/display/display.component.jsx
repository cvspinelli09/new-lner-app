import React from 'react'

import './display.styles.css';

const DisplayItem = () => {
    return (
      <div className="container">
        <div className="title">
          <h2>Know your trains</h2>
          <div className="button-container">
            <div>
              <button className="button">Departure</button>
              <button className="button">Arrival</button>
            </div>
            <div>
              <button className="button">By Time</button>
              <button className="button">By Headcode</button>
            </div>
          </div>
          <div>
            <input 
                className="input" 
                type="text" 
                placeholder="Enter"
            />
          </div>
        </div>
      </div>
    );
};

export default DisplayItem;