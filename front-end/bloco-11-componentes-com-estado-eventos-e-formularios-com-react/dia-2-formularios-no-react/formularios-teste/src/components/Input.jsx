import React, { Component } from "react";

class Input extends Component {
  render() {
    const { inputLabel, tipo, testeId } = this.props
    return (
      <label> {inputLabel}
        <input type={tipo} data-testid={testeId}></input>
      </label>
    )
  }
}

export default Input