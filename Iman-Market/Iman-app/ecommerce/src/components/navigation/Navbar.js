import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import ShoppingCart from '../shoppingCart/ShoppingCart';
import { useSelector, useDispatch } from 'react-redux'
import { logout } from '../../store/actions/authenticate'

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  // const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);



  const handlelogout = (e) =>{
  e.preventDefault()  
  dispatch(logout())

}

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
          <div className="container fs-4">
            <NavLink  className="navbar-brand" to="/">Iman-shop</NavLink>
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
              <li className="nav-item py-4">
                <NavLink exact  to="/" className="nav-link  active">Home</NavLink>
              </li>
              <li className="nav-item py-4 ">
                <NavLink exact  to="/products" className="nav-link active">Products</NavLink>
              </li>
            
              { 
                 isAuth ? <li className="nav-item py-4 "><NavLink exact  to="/" className="nav-link active " activeClassName="active-link" onClick={e => handlelogout(e)}>log out</NavLink></li>
             
                  : <li className="nav-item py-4"><NavLink exact  to="/login" className="nav-link active" activeClassName="active-link">Login</NavLink></li>
               }
        

              <li className="nav-item dropdown py-4">
                <span
                  className="nav-link dropdown-toggle hidden-arrow"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                 <i className="fas fa-shopping-cart "></i>
                  <span show="cartItemCount" className="badge rounded-pill badge-notification bg-danger">{totalCartQuantity}</span>
               
                </span>
                <ul className="dropdown-menu dropdown-menu-end shopping-cart " aria-labelledby="navbarDropdownMenuLink">
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
  