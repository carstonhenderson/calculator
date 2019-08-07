import React from 'react'
import CalculatorButton from './calculatorButton'

const CalculatorControls = ({ handleClick }) => (
  <div>
    <div className="flex justify-between mb-2">
      <CalculatorButton value="(" color="blue" handleClick={handleClick} />
      <CalculatorButton value=")" color="blue" handleClick={handleClick} />
      <CalculatorButton value="Calculate" color="green" handleClick={handleClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="+" color="blue" handleClick={handleClick} />
      <CalculatorButton value="-" color="blue" handleClick={handleClick} />
      <CalculatorButton value="*" color="blue" handleClick={handleClick} />
      <CalculatorButton value="/" color="blue" handleClick={handleClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="7" color="gray" handleClick={handleClick} />
      <CalculatorButton value="8" color="gray" handleClick={handleClick} />
      <CalculatorButton value="9" color="gray" handleClick={handleClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="4" color="gray" handleClick={handleClick} />
      <CalculatorButton value="5" color="gray" handleClick={handleClick} />
      <CalculatorButton value="6" color="gray" handleClick={handleClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="1" color="gray" handleClick={handleClick} />
      <CalculatorButton value="2" color="gray" handleClick={handleClick} />
      <CalculatorButton value="3" color="gray" handleClick={handleClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="0" color="gray" handleClick={handleClick} />
      <CalculatorButton value="." color="gray" handleClick={handleClick} />
      <CalculatorButton value="Back" color="red" handleClick={handleClick} />
    </div>
  </div>
)

export default CalculatorControls
