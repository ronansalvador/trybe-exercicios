import React, { Component } from "react";
import OptionSelect from "./OptionSelect";

class Select extends Component {
  render() {
    const { inputLabel, testeId } = this.props
    return (
      <label> {inputLabel}
        <select data-testid={testeId}>
        <OptionSelect name="normal" />
        <OptionSelect name="raro" />
        <OptionSelect name="muito raro" />
        </select>
      </label>
    )
  }
}

export default Select