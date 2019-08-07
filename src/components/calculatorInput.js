import React from 'react'
import ClearButton from './clearButton'

const CalculatorInput = ({ value, handleClick }) => (
  <div className="bg-gray-900 p-4 rounded text-right flex justify-between items-center">
    <ClearButton handleClick={handleClick} />
    {value}
  </div>
)

export default CalculatorInput
