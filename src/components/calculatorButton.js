import React from 'react'
import { motion } from 'framer-motion'

const CalculatorButton = ({ value, color, handleClick }) => (
  <motion.button
    onClick={() => handleClick(value)}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`bg-${color}-600 rounded mx-1 p-4 flex-1 button text-lg`}
  >
    {value}
  </motion.button>
)

export default CalculatorButton
