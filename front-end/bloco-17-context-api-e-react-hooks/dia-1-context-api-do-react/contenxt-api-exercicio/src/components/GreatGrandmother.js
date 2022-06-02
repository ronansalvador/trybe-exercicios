import React, { Component } from 'react'
import Grandmother from './Grandmother'
import MyContext from './MyContext'

export default class GreatGrandmother extends Component {

  constructor(props){
    super(props)
    this.state={
      money: 1000000000
    }
  }

  handleSpendMoney = () => {
    this.setState((prev) => ({money: prev.money - 100}))
  }
  render() {
    const contextValue = {
      money: this.state.money,
      spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó</h1>
          <Grandmother />
        </div>
      </MyContext.Provider>
    )
  }
}
