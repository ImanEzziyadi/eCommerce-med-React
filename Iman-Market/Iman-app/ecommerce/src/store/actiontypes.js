const actiontypes = () => {
    return {
      productCatalog: {
        set: 'SET_PRODUCT_CATALOG',
        loading: 'LOADING',
        setProducts: 'SET_PRODUCTS',
        setProduct: 'SET_PRODUCT'
      },
      
      cart: {
        add: 'ADD_TO_CART',
        remove: 'REMOVE_FROM_CART',
        clear: 'DELETE_PRODUCT'
      },
      auth: {
        login: 'LOGIN',
        logout: 'LOGOUT',
        register: 'REGISTER'
      }
    }
  }
  
  export default actiontypes;