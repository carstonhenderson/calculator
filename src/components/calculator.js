import React, { useState } from 'react'
import CalculatorInput from './calculatorInput'
import CalculatorOutput from './calculatorOutput'
import CalculatorControls from './calculatorControls'

const Calculator = () => {
  const [input, setInput] = useState('0')
  const [output, setOutput] = useState(0)
  const [error, setError] = useState(false)
  const [calculate, setCalculate] = useState(false)

  const handleClick = value => {
    if (!isNaN(value) || ['+', '-', '*', '/', '(', ')', '.'].includes(value)) {
      input === '0' ? setInput(value) : setInput(`${input}${value}`)

      setCalculate(false)
      setError(false)
    } else if (value === 'Back') {
      input.length === 1
        ? setInput('0')
        : setInput(input.slice(0, input.length - 1))

      setCalculate(false)
      setError(false)
    } else if (value === 'Calculate') {
      try {
        // eslint-disable-next-line
        setOutput(parseFloat(eval(input).toFixed(5)).toString())
        setCalculate(true)
      } catch (e) {
        setError(true)
      }
    }
  }

  return (
    <div className="flex flex-col w-screen max-w-md h-screen justify-between px-2 py-4">
      <div className="mb-4">
        <CalculatorInput
          value={input}
          error={error}
          handleClick={() => {
            setInput('0')
            setError(false)
          }}
        />
      </div>

      <div className="mb-4">
        <CalculatorOutput value={output} calculate={calculate} />
      </div>

      <CalculatorControls handleClick={handleClick} />
    </div>
  )
}

export default Calculator
