"use client"

import React, { Component } from 'react'
import Button from './Button'
import buttonStyles from './Button.module.css'
import calculatorStyles from './Calculator.module.css'
import CalculatorInput from './CalculatorInput'

// Define the props for the calculator
type CalculatorProps = {
    containerClassName?: string
}

class Calculator extends Component<CalculatorProps> {
  render() {
    // Destructure main calculator container classname
    const {containerClassName} = this.props;

    return (
      <div className={containerClassName}>
        <CalculatorInput/>
        <div className={calculatorStyles.innerCalculatorPanel}>
          <Button buttonText="+" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="-" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="×" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="÷" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="7" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="8" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="9" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="AC" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="4" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="5" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="6" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="±" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="1" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="2" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="3" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="." onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="0" onClick={() => {}} className={buttonStyles.inputButton}/>
          <Button buttonText="(" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText=")" onClick={() => {}} className={buttonStyles.functionButton}/>
          <Button buttonText="=" onClick={() => {}} className={buttonStyles.equalsButton}/>
        </div>
      </div>
    )
  }
}

export default Calculator
