const actiontypes = () => {
    return {
      productCatalog: {
        set: 'SET_PRODUCT_CATALOG',
        loading: 'LOADING',
        setProducts: 'SET_PRODUCTS',
        setProduct: 'SET_PRODUCT'
      },
      // getProduct: {
      //   get: 'get-one-product'

      // },
      cart: {
        add: 'ADD_TO_CART',
        remove: 'REMOVE_FROM_CART',
        clear: 'DELETE_PRODUCT'
      },
      auth: {
        login: 'LOGIN',
        logout: 'LOGOUT'
      }
    }
  }
  
  export default actiontypes;