import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { register } from '../store/actions/authenticate';

const Register = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

  const dispatch = useDispatch();
  const history = useHistory();

  const registerClick = () => {
    const _user={
      firstName,
      lastName,
      email,
      password
    }

    dispatch(register(_user))

    try { history.push(history.location.state.from.pathname) }
    catch { history.push('/') }
  }
    return (
        <div  className="container mt-5">
        <form  className="text-center p-5 border col-6 mx-auto" >
          <p className="h4 mb-4">Sign Up</p>
          {/* 2 column grid layout with text inputs for the first and last names  */}
          <div  className="row mb-4">
            <div  className="col">
              <div>
                <input type="text" id="form3Example1" className="form-control " onChange={e => setFirstName(e.target.value)}/>
                <label  className="form-label"  htmlFor="form3Example1" >First name</label>
              </div>
            </div>
            <div className="col">
              <div>
                <input type="text" id="form3Example2" className="form-control " onChange={e => setLastName(e.target.value)}/>
                <label className="form-label" htmlFor="form3Example2">Last name</label>
              </div>
            </div>
          </div>
    
          
           {/* Email input  */}
           
          <div>
            <input type="email" id="form3Example3" className="form-control " onChange={e => setEmail(e.target.value)}/>
            <label  className="form-label"  htmlFor="form3Example3">Email address</label>
          </div>
    
          {/* Password input  */}
          <div className=" mb-4">
            <input type="password" id="form3Example4" className="form-control" onChange={e => setPassword(e.target.value)}/>
            <label  className="form-label"  htmlFor="form3Example4">Password</label>
          </div>
    
           {/* Submit button  */}
          <button type="submit" className="btn btn-secondary btn-block mb-4" onClick={registerClick }>Sign up</button>
    
          
    
        </form>
      </div>



        
    )
}

export default Register
