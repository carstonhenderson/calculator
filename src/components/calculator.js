import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculatorOutput from './calculatorOutput'
import CalculatorControls from './calculatorControls'

const Calculator = () => {
  const [input, setInput] = useState('0')
  const [output, setOutput] = useState(0)

  const handleClick = value => {
    if (!isNaN(value) || ['+', '-', '*', '/', '(', ')', '.'].includes(value)) {
      input === '0' ? setInput(value) : setInput(`${input}${value}`)
    } else if (value === 'Back') {
      input.length === 1 ? setInput('0') : setInput(input.slice(0, input.length - 1))
    } else if (value === 'Calculate') {
      // eslint-disable-next-line
      setOutput(parseFloat(eval(input).toFixed(5)).toString())
    }
  }

  return (
    <div className="flex flex-col w-screen max-w-md h-screen justify-between px-2 py-4">
      <div className="mb-4">
        <CalculatorInput value={input} handleClick={() => setInput('0')} />
      </div>

      <div className="mb-4">
        <CalculatorOutput value={output} />
      </div>

      <CalculatorControls handleClick={handleClick} />
    </div>
  )
}

export default Calculator
