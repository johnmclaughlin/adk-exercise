import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Search</Link></li>
        <li><Link to='/readinglist'>My Reading List<span>0</span></Link></li>
      </ul>
    </nav>
  </header>
)

export default Header
