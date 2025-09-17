"use client"

import React, { Component } from 'react'
import inputStyles from './CalculatorInput.module.css'

type InputProps = {}

type InputState = {
  inputValue: string
}

export class CalculatorInput extends Component<InputProps, InputState> {
  
  constructor(props: InputProps) {
    super(props)
  
    this.state = {
       inputValue: '1234'
    }
  }

  render() {
    return (
      <input className={inputStyles.calculatorInput} value={this.state.inputValue}></input>
    )
  }
}

export default CalculatorInput