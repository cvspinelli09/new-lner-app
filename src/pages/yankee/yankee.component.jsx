import React from 'react';

import './yankee.styles.scss';



class YankeePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: []
    }
  }

  render() {
    return (
      <div>
        <h1 className='title'>YANKEE SHEET Jobs</h1>
      </div>
    )
  }
};
             
export default YankeePage;