import React from 'react'
import CalculatorButton from './calculatorButton'

const CalculatorInput = () => (
  <div>
    <div className="flex -mx-2">
      <CalculatorButton value="AC" color="orange" />
      <CalculatorButton value="+/-" color="red" />
      <CalculatorButton value="%" color="red" />
      <CalculatorButton value="/" color="red" />
    </div>

    <div className="flex -mx-2">
      <CalculatorButton value="7" color="gray" />
      <CalculatorButton value="8" color="gray" />
      <CalculatorButton value="9" color="gray" />
      <CalculatorButton value="*" color="red" />
    </div>

    <div className="flex -mx-2">
      <CalculatorButton value="4" color="gray" />
      <CalculatorButton value="5" color="gray" />
      <CalculatorButton value="6" color="gray" />
      <CalculatorButton value="-" color="red" />
    </div>

    <div className="flex -mx-2">
      <CalculatorButton value="1" color="gray" />
      <CalculatorButton value="2" color="gray" />
      <CalculatorButton value="3" color="gray" />
      <CalculatorButton value="+" color="red" />
    </div>

    <div className="flex -mx-2">
      <CalculatorButton value="?" color="purple" />
      <CalculatorButton value="0" color="gray" />
      <CalculatorButton value="." color="gray" />
      <CalculatorButton value="=" color="blue" />
    </div>
  </div>
)

export default CalculatorInput
