import axios from 'axios';
import actiontypes from '../actiontypes';

export const getOneProduct= () => {
  return async dispatch => {
    const res = await axios.get('http://localhost:9999/api/products/.id')
    dispatch(setProducts(res.data))
  }
}

export const setProducts = products => {
    return {
      type: actiontypes().getOneProduct.setProducts,
      payload: products
  }
}