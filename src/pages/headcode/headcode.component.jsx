import React from 'react';

import './headcode.styles.scss';

import HEADCODE_DATA from "./headcode.data";
import Header from "../../components/header/header.component";
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
        <Header />
        <DisplayItem />
      </div>
    );
  }
}

export default HeadcodePage;