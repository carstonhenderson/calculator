import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => (
  <main
    className="bg-black text-gray-100 flex justify-center items-center"
    style={{ height: window.innerHeight }}
  >
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
