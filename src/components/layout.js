import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'

const Layout = ({ children }) => (
  <main className="bg-black h-screen text-gray-100 flex justify-center items-center">
    {children}
  </main>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
