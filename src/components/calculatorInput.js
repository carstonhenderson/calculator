import React from 'react'
import ClearButton from './clearButton'
import { motion, useAnimation } from 'framer-motion'

const CalculatorInput = ({ value, error, handleClick }) => {
  const controls = useAnimation()

  if (error === true) {
    controls.start({
      x: [null, -5, 0, 5, 0, -5, 0, 5, 0],
      transition: { duration: 0.25 },
    })
  }

  return (
    <div className="bg-gray-900 p-4 rounded text-right flex justify-between items-center">
      <ClearButton handleClick={handleClick} />
      <motion.span animate={controls} className={error ? 'text-red-500' : ''}>
        {value}
      </motion.span>
    </div>
  )
}

export default CalculatorInput
