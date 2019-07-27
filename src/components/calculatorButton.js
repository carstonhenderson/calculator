import React from 'react'
import { motion } from 'framer-motion'

const CalculatorButton = ({ value, color }) => (
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className={`w-12 h-12 bg-${color}-600 m-1 rounded-lg shadow-2xl flex justify-center items-center`}
  >
    {value}
  </motion.button>
)

export default CalculatorButton
