import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <nav className="navbar row">
      <div className="col-12 col-md-3 image">
        <div className="navbar-brand">
          <Link to={'/'}>
          <img width="150px" alt='Veertrackz_Cart' src="/images/veertrackz.png" />
          </Link>
        </div>
      </div>

      <div className="col-12 col-md-5 mt-2 mt-md-0">
       <Search/>
      </div>

      <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
        <Link to="/login" className="btn" id="login_btn">Login</Link>

        <span id="cart" className="ml-3">Cart</span>
        <span className="ml-1" id="cart_count">2</span>
      </div>
    </nav>
  )
}

export default Header