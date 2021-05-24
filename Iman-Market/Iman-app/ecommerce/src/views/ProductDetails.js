import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, setProduct } from '../store/actions/productCatalogAction';
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/actions/cartActions';

const ProductDetails = () => {

  const id = useParams().id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id))

    return () => {
      // console.log('cleanup');
      dispatch(setProduct(null))
    }

  }, [dispatch, id])

  const product = useSelector(state => state.productCatalog.product);
  const loading = useSelector(state => state.productCatalog.loading);

  const _product = ( product && 
    <div className="container my-5 py-5 z-depth-1">


    {/* --Section: Content-- */}
    <section className="text-center">
    
  
       {/* Section heading  */}
      <h3 className="font-weight-bold mb-5">Product Details</h3>
  
      <div className="row">
  
        <div className="col-lg-6">
  
          {/* <!--Carousel Wrapper--> */}
          <div id="carousel-thumb" className="carousel slide carousel-fade carousel-thumbnails" data-ride="carousel">
  
            {/* <!--Slides--> */}
            <div className="carousel-inner text-center text-md-left" role="listbox">
              <div className="carousel-item active">
              <img
                src={product.image}
                className="card-img-top"
                alt="..."
              />
              </div>
            </div>
           {/* Slides--><!--Thumbnails */}
            <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            {/* <!--/.Thumbnails--> */}
  
          </div>
          {/* <!--/.Carousel Wrapper--> */}
  
        </div>
  
        <div className="col-lg-5 text-center text-md-left">
  
          <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
            <strong>{product.name}</strong>
          </h2>
          <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
          <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
            <span className="red-text font-weight-bold">
              <strong className="pris">{ product.price } kr</strong>
            </span>
          </h3>
  
          {/* <!--Accordion wrapper--> */}
          <div className="accordion md-accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
  
            {/* <!-- Accordion card --> */}
            <div className="card">
  
              {/* <!-- Card header --> */}
              <div className="card-header" role="tab" id="headingOne1">
                <a data-toggle="collapse" data-parent="#accordionEx" href="#collapseOne1" aria-expanded="true"
                  aria-controls="collapseOne1">
                  <h5 className="mb-0">
                    Description
                    <i className="fas fa-angle-down rotate-icon"></i>
                  </h5>
                </a>
              </div>
  
              {/* <!-- Card body --> */}
              <div id="collapseOne1" className="collapse show" role="tabpanel" aria-labelledby="headingOne1"
                data-parent="#accordionEx">
                <div className="card-body">
                { product.short }
              
                </div>
              </div>
            </div>
            {/* <!-- Accordion card --> */}
  
           
  
          </div>
          {/* <!--/.Accordion wrapper--> */}
  
          {/* <!-- Add to Cart --> */}
          <section className="color">
            <div className="mt-5">
  
              <div className="row mt-3">
                <div className="col-md-12 text-center text-md-left text-md-right">
                  <p className='garantee'> one years guarantee </p>
                  <button className="btn btn-secondary btn-rounded" onClick={() => {
                      dispatch(addToCart(product))
                      }}>
                    <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Add to cart</button>
                    
                </div>
              </div>
  
            </div>
          </section>
          {/* <!-- /.Add to Cart --> */}
  
        </div>
  
      </div>
  
    </section>
    {/* <!--Section: Content--> */}
  
  
  </div>
   
 
  
  
  //   <divclassNameName="col">
    
  //   <div className="card h-100">
  //     <img
  //       src={product.image}
  //       className="card-img-top"
  //       alt="..."
  //     />
  //     <div className="card-body">
  //       <h5 className="card-title">{product.name}</h5>
  //       <div className="card-text">
  //       <p>{ product.short }</p>
  //       <p className="text-danger h5">{ product.price } kr</p>
  //       <div className= "container d-flex " >
  //        <button className="btn btn-info" onClick={() => {
  //         dispatch(addToCart(product))
  //       }}>Add to cart</button>

  //       </div>
         
  //       </div>
  //     </div>
  //   </div>
  // </divclassNameName=>
)

  return (
    <div>
      { _product }
      {loading && <p>Loading...</p>}
    </div>
  )
}

export default ProductDetails
