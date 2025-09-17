"use client"

import React, { Component } from 'react'
import Button from './Button'
import buttonStyles from './Button.module.css'
import calculatorStyles from './Calculator.module.css'
import { create, all, ConfigOptions, ResultSet } from 'mathjs'

/**
 * The accepted properties for the Calculator.
 */
type CalculatorProps = {
  containerClassName?: string
}

type CalculatorState = {
  inputExpression: string
}


const mathConfig: ConfigOptions = {
  number: "BigNumber",
}

/**
 * The Calculator component creates a fully usable calculator.
 * 
 * @component
 * 
 * @param {CalculatorProps} props - The properties for the calculator.
 */
class Calculator extends Component<CalculatorProps, CalculatorState> {
  // Create the math instance used to eval expressions
  math = create(all, mathConfig);

  constructor(props: CalculatorProps) {
    super(props)
  
    this.state = {
       inputExpression: ''
    }
  }

  /**
   * Add a digit to the inputExpression.
   * 
   * @param num the digit to add.
   */
  addDigitToExpr = (digit: string) => {
    this.setState((previousState) => {
      const prevExpr = previousState.inputExpression
      return {inputExpression: prevExpr + digit}
    });
  }

  /**
   * Add an operator to the inputExpression.
   * 
   * @param operator the operator to add.
   */
  addOperatorToExpr = (operator: string) => {
    this.setState((previousState) => {
      const prevExpr = previousState.inputExpression
      return {inputExpression: prevExpr + operator}
    });
  }

  /**
   * Delete the last character entered.
   */
  deleteLastChar = () => {
    this.setState((previousState) => ({
      inputExpression: previousState.inputExpression.slice(0, -1)
    }))
  }


  addDecimalPointToExpr = () => {
    this.addCharacterToExpr(".");
  }

  /**
   * Add a character to the expression by updating the state.
   * 
   * @param char the character to add.
   */
  addCharacterToExpr = (char: string) => {
    this.setState((previousState) => {
      return {inputExpression: previousState.inputExpression + char}
    });
  }

  addParenthesisToExpr = (isOpening: boolean) => {
    const char = isOpening ? "(" : ")"
    this.addCharacterToExpr(char)
  }

  /**
   * Calculate the result of the expression.
   */
  calculateResult = () => {
    const result: ResultSet = this.math.evaluate(this.state.inputExpression)
    this.setState({inputExpression: result.toString()})
  }

  /**
   * Clear the current expression.
   */
  clearExpr = () => {
    this.setState({inputExpression: ''})
  }

  render() {
    // Destructure main calculator container classname
    const {containerClassName} = this.props;

    return (
      <div className={containerClassName}>
        <input className={calculatorStyles.calculatorInput} value={this.state.inputExpression} readOnly={true}></input>
        <div className={calculatorStyles.innerCalculatorPanel}>
          <Button buttonText="+" onClick={() => {this.addOperatorToExpr("+")}} className={buttonStyles.functionButton}/>
          <Button buttonText="-" onClick={() => {this.addOperatorToExpr("-")}} className={buttonStyles.functionButton}/>
          <Button buttonText="×" onClick={() => {this.addOperatorToExpr("×")}} className={buttonStyles.functionButton}/>
          <Button buttonText="÷" onClick={() => {this.addOperatorToExpr("÷")}} className={buttonStyles.functionButton}/>
            
          <Button buttonText="7" onClick={() => {this.addDigitToExpr("7")}} className={buttonStyles.inputButton}/>
          <Button buttonText="8" onClick={() => {this.addDigitToExpr("8")}} className={buttonStyles.inputButton}/>
          <Button buttonText="9" onClick={() => {this.addDigitToExpr("9")}} className={buttonStyles.inputButton}/>
          
          <Button buttonText="AC" onClick={() => {this.clearExpr()}} className={buttonStyles.functionButton}/>
          
          <Button buttonText="4" onClick={() => {this.addDigitToExpr("4")}} className={buttonStyles.inputButton}/>
          <Button buttonText="5" onClick={() => {this.addDigitToExpr("5")}} className={buttonStyles.inputButton}/>
          <Button buttonText="6" onClick={() => {this.addDigitToExpr("6")}} className={buttonStyles.inputButton}/>
          
          <Button buttonText="DEL" onClick={this.deleteLastChar} className={buttonStyles.functionButton}/>
          
          <Button buttonText="1" onClick={() => {this.addDigitToExpr("1")}} className={buttonStyles.inputButton}/>
          <Button buttonText="2" onClick={() => {this.addDigitToExpr("2")}} className={buttonStyles.inputButton}/>
          <Button buttonText="3" onClick={() => {this.addDigitToExpr("3")}} className={buttonStyles.inputButton}/>
          
          <Button buttonText="." onClick={this.addDecimalPointToExpr} className={buttonStyles.functionButton}/>
          
          <Button buttonText="0" onClick={() => {this.addDigitToExpr("0")}} className={buttonStyles.inputButton}/>
          
          <Button buttonText="(" onClick={() => {this.addParenthesisToExpr(true)}} className={buttonStyles.functionButton}/>
          <Button buttonText=")" onClick={() => {this.addParenthesisToExpr(false)}} className={buttonStyles.functionButton}/>
          <Button buttonText="=" onClick={this.calculateResult} className={buttonStyles.equalsButton}/>
        </div>
      </div>
    )
  }
}

export default Calculator
