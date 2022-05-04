import React, { Component } from "react";
import Input from "./Input";
import TextArea from "./TextArea";
import Select from "./Select";

class Form extends Component {
  render() {
   
    return (
      <div>
        <h1>Adicionar nova carta</h1>
        <Input inputLabel='Nome' tipo="text" testeId="name-input"/>
        <TextArea inputLabel='Descrição' testeId="description-input" />
        <Input inputLabel='Attr1' tipo="number" testeId="attr1-input"/>
        <Input inputLabel='Attr2' tipo="number" testeId="attr2-input"/>
        <Input inputLabel='Attr3' tipo="number" testeId="attr3-input"/>
        <Input inputLabel='Imagem' tipo="text" testeId="image-input"/>
        <Select inputLabel="Raridade" testeId="rare-input"></Select>
        <Input inputLabel='Super Trunfo' tipo="checkbox" testeId="trunfo-input"/>
        <button data-testid="save-button">Salvar</button>
 
  
        </div>
    )
  }
}

export default Form