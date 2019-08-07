import React from 'react'
import { motion } from 'framer-motion'

const ClearButton = ({ handleClick }) => (
  <motion.button
    onClick={handleClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="bg-gray-700 py-1 px-2 rounded-full text-xs button"
  >
    Clear
  </motion.button>
)

export default ClearButton
