import React, { Component } from "react";

class OptionSelect extends Component {
  render() {
    const { name } = this.props
    return (
      <option value={name}>{name}</option>
    )
  }
}

export default OptionSelect