import React, { Component } from "react";

class TextArea extends Component {
  render() {
    const { inputLabel, testeId } = this.props
    return (
      <label> {inputLabel}
        <textarea data-testid={testeId}></textarea>
      </label>
    )
  }
}

export default TextArea