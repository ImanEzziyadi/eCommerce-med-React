import { combineReducers } from 'redux'

import productCatalogReducer from './productCatalogReducer';
 import cartReducer from './cartReducer';
 import auth from './authReducer'

export default combineReducers({
  productCatalog: productCatalogReducer,
   cartReducer,
   auth
})