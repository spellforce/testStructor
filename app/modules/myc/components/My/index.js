/**
*
* My
*
*/

import React, { Component } from "react";

import PropTypes from "prop-types";

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "1em"
};
const style1 = { padding: "1em", textAlign: "center" };

class My extends Component {
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

        <div>
          <button><span>Button1</span></button>
          <h3 style={style1}>
            <span><button><span>Button3</span></button></span>
          </h3>
        </div>

      </div>
    );
  }
}

My.propTypes = {
  exampleProp: PropTypes.string
};
My.defaultProps = {
  exampleProp: ""
};

export default My;
