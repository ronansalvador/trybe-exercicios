import React, { Component } from 'react'
import MyContext from './MyContext'

export default class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a Filhaaa</h4>
        <MyContext.Consumer>
          {
            value => (
            <div>
              <p>{` Eu Tenho ${value.money}`}</p>
              <button onClick={value.spendMoney}>PEDIR IFOOD</button> 
            </div>
            )
          }
        </MyContext.Consumer>
        
      </div>
    )
  }
}
