import React from 'react'
import { useDispatch } from 'react-redux';
 import { addToCart } from '../../store/actions/cartActions';
 import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {

  const dispatch = useDispatch();

  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.image}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <div className="card-text">
          <p>{ product.short }</p>
          <p className="text-danger h5">{ product.price }</p>
          <div className= "container d-flex " >
           <button className="btn btn-info" onClick={() => {
            dispatch(addToCart(product))
          }}>Add to cart</button>

          <button className="btn btn-secondary" onClick={() => { 
             <Link  to="/ProductDetails">view</Link>  
            // dispatch(getOneProduct(product))
          }}>details</button>
          </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
