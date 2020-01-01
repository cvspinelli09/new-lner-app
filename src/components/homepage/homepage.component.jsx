import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className="homepage">
    <div className="directory-menu">
      <div className="menu-item">
        <div className="content">
          <h1 className="title">The KNOWLEDGE</h1>
          <span className="subtitle">Timetable 2020</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">YANKEE Sheet</h1>
          <span className="subtitle">Jobs</span>
        </div>
      </div>
      <div className="menu-item">
        <div className="content">
          <h1 className="title">Headcode Sheet</h1>
          <span className="subtitle">know your train</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;