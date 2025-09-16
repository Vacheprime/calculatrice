"use client"

import CalculatorInput from "@/components/CalculatorInput";
import pageStyles from "./page.module.css";
import Button from "@/components/Button";
import buttonStyles from '@/components/Button.module.css'

export default function Home() {
  return (
    <main className={pageStyles.mainContentContainer}>
      <div className={pageStyles.calculatorPanel}>
        <CalculatorInput/>
        <div className={pageStyles.innerCalculatorPanel}>
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
    </main>
  );
}
