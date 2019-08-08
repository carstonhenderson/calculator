import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setHeight(window.innerHeight)
  })
  
  return (
  <main
    className="bg-black text-gray-100 flex justify-center items-center"
    style={{ height: height }}
  >
    {children}
  </main>
)
  }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
