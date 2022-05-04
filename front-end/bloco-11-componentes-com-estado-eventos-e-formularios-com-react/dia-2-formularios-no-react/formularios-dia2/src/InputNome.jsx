import React, { Component } from "react";

class InputNome extends Component{
  render(){
    const {value, handleChange, handleError} = this.props
    let error = true
    if (value.length > 20) {
      error = false
      handleError(error)
    }
   
    return(
      <label>
      Nome
      <input type="text" name="nome" placeholder="Nome" onChange={handleChange} value={value}></input>
      <span>{!error? 'deu erro' : ''}</span>
      </label>
    )
  }
}

export default InputNome

