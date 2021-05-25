import React from 'react'

import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { login } from '../store/actions/authenticate';
import { Link } from 'react-router-dom';

const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = e => {
    e.preventDefault();
    dispatch(login({email, password}))
    try { history.push(history.location.state.from.pathname) }
    catch { history.push('/') }
    


    
  }

  return (
    <div>
      <form className="border text-center p-5 col-6 mx-auto" >
      <p className="h4 mb-4">Sign In</p>
       {/* Email input  */}
      <div className=" mb-4">
        <input type="email" id="email" value={email} className="form-control" onChange={e => setEmail(e.target.value)}/>
        <label className="form-label" htmlFor="email">Email address</label>
      </div>

       {/* Password input  */}
      <div className=" mb-4">
        <input type="password" id="password" value={password} className="form-control" onChange={e => setPassword(e.target.value)} />
        <label className="form-label" htmlFor="password">Password</label>
      </div >


      {/* Submit button  */}
      <button type="submit" className="btn btn-secondary btn-block mb-4"onClick={e => handleClick(e)} >Sign in</button>

      {/* Register buttons  */}
      <div className="text-center">
        <p>Not a member? <Link to="/register" className="btn btn-link">Register</Link></p>
        <p>or sign up with:</p>
    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-facebook-f"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-google"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-twitter"></i>
    </button>

    <button type="button" className="btn btn-secondary btn-floating mx-1">
      <i className="fab fa-github"></i>
    </button>
        
      </div>
    </form>
    </div>
  )
}

export default Login