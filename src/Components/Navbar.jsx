import React from 'react'
import '../App'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'><div><h3>Home <i class="bi bi-house-door-fill"></i></h3></div> </Link>
        
        <Link to="/favorites"><h3>cart <i class="bi bi-bag-heart-fill"></i></h3></Link>
    </div>
  )
}

export default Navbar