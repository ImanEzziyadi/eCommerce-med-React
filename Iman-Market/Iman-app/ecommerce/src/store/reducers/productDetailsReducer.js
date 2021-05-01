import actiontypes from '../actiontypes';

const initState = null;

const productDetailsReducer = (state = initState, action) => {
  switch(action.type) {
    case actiontypes().getProduct.get:
      state = action.payload
      return state
      
    default:
      return state
  }
}

export default productDetailsReducer;