import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculatorOutput from './calculatorOutput'
import CalculatorControls from './calculatorControls'

const Calculator = () => {
  const [input, setInput] = useState(0)
  const [output, setOutput] = useState(0)

  const onClick = value => {
    if (!isNaN(value) || ['+', '-', '*', '/', '(', ')'].includes(value)) {
      setInput(parseInt(`${input}${value}`))
    } else if (value === 'AC') {
      setInput('')
      setOutput('')
    } else if (value === '=') {
      setOutput(eval(input))
    }
  }

  return (
    <div className="flex flex-col w-screen max-w-xs p-4">
      <div className="mb-4">
        <CalculatorInput value={input} />
      </div>

      <div className="mb-4">
        <CalculatorOutput value={output} />
      </div>

      <CalculatorControls onClick={onClick} />
    </div>
  )
}

export default Calculator
