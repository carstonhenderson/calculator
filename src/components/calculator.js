import React from 'react'
import CalculatorOutput from './calculatorOutput'
import CalculatorInput from './calculatorInput'

const Calculator = () => (
  <div className="flex flex-col bg-gray-800 rounded shadow-2xl p-4">
    <div className="mb-4">
      <CalculatorOutput />
    </div>
    <CalculatorInput />
  </div>
)

export default Calculator
