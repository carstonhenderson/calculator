import React from 'react'
import CalculatorButton from './calculatorButton'

const CalculatorControls = ({ onClick }) => (
  <div>
    <div className="flex justify-between mb-2">
      <CalculatorButton value="(" color="blue" onClick={onClick} />
      <CalculatorButton value=")" color="blue" onClick={onClick} />
      <CalculatorButton value="Calculate" color="green" onClick={onClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="+" color="blue" onClick={onClick} />
      <CalculatorButton value="-" color="blue" onClick={onClick} />
      <CalculatorButton value="*" color="blue" onClick={onClick} />
      <CalculatorButton value="/" color="blue" onClick={onClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="7" color="gray" onClick={onClick} />
      <CalculatorButton value="8" color="gray" onClick={onClick} />
      <CalculatorButton value="9" color="gray" onClick={onClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="4" color="gray" onClick={onClick} />
      <CalculatorButton value="5" color="gray" onClick={onClick} />
      <CalculatorButton value="6" color="gray" onClick={onClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="1" color="gray" onClick={onClick} />
      <CalculatorButton value="2" color="gray" onClick={onClick} />
      <CalculatorButton value="3" color="gray" onClick={onClick} />
    </div>

    <div className="flex justify-between mb-2">
      <CalculatorButton value="0" color="gray" onClick={onClick} />
      <CalculatorButton value="." color="gray" onClick={onClick} />
      <CalculatorButton value="Back" color="red" onClick={onClick} />
    </div>
  </div>
)

export default CalculatorControls
