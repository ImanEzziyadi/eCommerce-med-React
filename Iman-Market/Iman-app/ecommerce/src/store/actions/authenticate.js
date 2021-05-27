import actiontypes from '../actiontypes';
import axios from 'axios'

export const login = ({email, password}) => {
  return async dispatch => {
    const res = await axios.post('http://localhost:9999/api/users/login', {email, password})
    if(res.status === 200) {
      localStorage.setItem('token', res.data.token)
    }
    dispatch(loginToken())
  }
}

export const loginToken = () => {
  return {
    type: actiontypes().auth.login,
    payload: true
  }
}


export const logout = () => {
let token = localStorage.getItem('token')
    if(token) {
      localStorage.removeItem('token')
    }
  return {
    type: actiontypes().auth.logout,
    payload: false
    }
  
}
 

export const register = _user => {
  return async dispatch => {
  const user = {
    email: _user.email,
    password: _user.password
  }
  console.log(_user)
  const res = await axios.post('http://localhost:9999/api/users/register', _user)
  console.log(res)
  dispatch(login(user))
}
}