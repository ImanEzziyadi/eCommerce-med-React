import actiontypes from '../actiontypes';

const initState = {
  productCatalog: [],
  product: null,
  loading: true
}


 const productCatalogReducer = (state = initState, action) => {
  switch(action.type) {

    case actiontypes().productCatalog.loading:
      return {
        ...state,
        loading: action.payload
      }
    case actiontypes().productCatalog.set:

       return {
        ...state,
        productCatalog: action.payload
       }

       case actiontypes().productCatalog.setProduct:
      return {
        ...state,
        product: action.payload
      }
       
      
     default:
      return state
  }
 }

export default productCatalogReducer;