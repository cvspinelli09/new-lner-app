import React from 'react';

import './headcode.styles.css';

import HEADCODE_DATA from "./headcode.data";
import DisplayItem from '../../components/display/display.component';

class HeadcodePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sheet: HEADCODE_DATA
    };  
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick() {
  //   this.setState({
  //     this.state.sheet.map(() => )
  //   })
  // }

  handleClick(event) {}

  render() {
    return (
      <div className="headcode">
        <DisplayItem />
      </div>
    );
  }
}

export default HeadcodePage;