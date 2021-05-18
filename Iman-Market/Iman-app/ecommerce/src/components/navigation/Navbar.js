import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authenticate'

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);

  const handlelogout = (e) =>{
  e.preventDefault()  
  dispatch(logout())

}


    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container">
            <Link className="navbar-brand" to="/">LOGO</Link>
            <button

            // Toggle button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbar-links"
            aria-controls="navbar-links"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbar-links">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink exact className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
              {
                // isAuth ? <li><NavLink exact to="/" className="nav-link" activeClassName="active-link">logout</NavLink></li>
                isAuth ? <button  onClick={e => handlelogout(e)}>log out</button>
                  : <li><NavLink exact to="/login" className="nav-link" activeClassName="active-link">Login</NavLink></li>
              }
              </li>
              {/* <button  onClick="handlelogout">log out</button> */}



              <li className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle hidden-arrow"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i className="fas fa-shopping-cart"></i>
                 <span show="cartItemCount" class="badge rounded-pill badge-notification bg-danger">{shoppingCart.length}</span>
                </span>
                <ul className="dropdown-menu dropdown-menu-end shopping-cart" aria-labelledby="navbarDropdownMenuLink">
                  <ShoppingCart /> 
                </ul>
              </li>


            </ul>
          </div>
         
         </div>
      </nav>
    </div>
  )
}

export default Navbar
  