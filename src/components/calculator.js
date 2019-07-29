import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculatorOutput from './calculatorOutput'
import CalculatorControls from './calculatorControls'

const Calculator = () => {
  const [input, setInput] = useState('0')
  const [output, setOutput] = useState(0)

  const onClick = value => {
    if (!isNaN(value) || ['+', '-', '*', '/', '(', ')', '.'].includes(value)) {
      if (input === '0') {
        setInput(value)
      } else {
        setInput(`${input}${value}`)
      }
    } else if (value === 'Back') {
      if (input.length === 1) {
        setInput('0')
      } else {
        setInput(input.slice(0, input.length - 1))
      }
    } else if (value === 'Calculate') {
      // eslint-disable-next-line
      setOutput(parseFloat(eval(input).toFixed(5)).toString())
    }
  }

  return (
    <div className="flex flex-col w-screen max-w-md h-screen justify-between px-2 py-4">
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
