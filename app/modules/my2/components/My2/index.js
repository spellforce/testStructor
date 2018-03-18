/**
*
* My2
*
*/

import React, { Component } from "react";

import PropTypes from "prop-types";

import { My } from "modules/myc";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em"
};

class My2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleValue: ""
    };
  }

  render() {
    const { exampleValue } = this.state; // eslint-disable-line
    const { exampleProp } = this.props; // eslint-disable-line
    return (
      <div style={style}>

        <My />

        <My />

        <My />

        <div><My /></div>

      </div>
    );
  }
}

My2.propTypes = {
  exampleProp: PropTypes.string
};
My2.defaultProps = {
  exampleProp: ""
};

export default My2;
