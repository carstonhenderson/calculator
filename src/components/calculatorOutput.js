import React from 'react'
import { motion, useAnimation } from 'framer-motion'

const CalculatorOutput = ({ value, calculate }) => {
  const controls = useAnimation()

  if (calculate === true) {
    controls.start({
      scale: [1, 2, 1],
      transition: { duration: 0.25 },
    })
  }

  return (
    <div className="text-center text-3xl font-bold p-4 select-all flex justify-end">
      <motion.div animate={controls}>{value}</motion.div>
    </div>
  )
}

export default CalculatorOutput
