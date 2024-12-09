import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../actions/productsAction";
import { useParams } from "react-router-dom";
import {useSelector } from 'react-redux';
import {Carousel} from 'react-bootstrap';


import Loader from "../layouts/Loader";
import MetaData from "../layouts/MetaData";
export default function ProductDetail() {
    const { products, loading } = useSelector((state) => state.productState);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getProduct(id));
  },[dispatch,id]);

  return (
    <Fragment>
     
    {loading ? 
      <Loader/>:
    <Fragment>
       <MetaData title={products.name}></MetaData>
      <div class="row f-flex justify-content-around">
        <div  class="col-12 col-lg-5 img-fluid " id="product_image">
          <Carousel pause="hover">
            {products.images && products.images.map(image=>
<Carousel.Item key={image._id}>
<img
            src={image.image}
            alt={image.name}
            height="500"
            width="500"
          />
</Carousel.Item>
            )}
         
          </Carousel>
         
        </div>

        <div class="col-12 col-lg-5 mt-5">
          <h3>{products.name}</h3>
          <p id="product_id">Product{products._id}</p>

          <hr />

          <div class="rating-outer">
            <div class="rating-inner" style={{width:`${products.ratings/5*100}%`}}></div>
          </div>
          <span id="no_of_reviews">({products.noofReviews} Reviews)</span>

          <hr />

          <p id="product_price">${products.price}</p>
          <div class="stockCounter d-inline">
            <span class="btn btn-danger minus">-</span>

            <input
              type="number"
              class="form-control count d-inline"
              value="1"
              readOnly
            />

            <span class="btn btn-primary plus">+</span>
          </div>
          <button
            type="button"
            id="cart_btn"
            class="btn btn-primary d-inline ml-4"
          >
            Add to Cart
          </button>

          <hr />

          <p>Status: <span className={products.stock > 0 ? "greenColor":"redColor"} id="stock_status">{products.stock > 0 ?"In Stock":"Out Of Stock"}</span>
          </p>

          <hr />

          <h4 class="mt-2">Description:</h4>
          <p>
          {products.description}
          </p>
          <hr />
          <p id="product_seller mb-3">
            Sold by: <strong>{products.seller}</strong>
          </p>

          <button
            id="review_btn"
            type="button"
            class="btn btn-primary mt-4"
            data-toggle="modal"
            data-target="#ratingModal"
          >
            Submit Your Review
          </button>

          <div class="row mt-2 mb-5">
            <div class="rating w-50">
              <div
                class="modal fade"
                id="ratingModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="ratingModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="ratingModalLabel">
                        Submit Review
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <ul class="stars">
                        <li class="star">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star">
                          <i class="fa fa-star"></i>
                        </li>
                        <li class="star">
                          <i class="fa fa-star"></i>
                        </li>
                      </ul>

                      <textarea
                        name="review"
                        id="review"
                        class="form-control mt-3"
                      ></textarea>

                      <button
                        class="btn my-3 float-right review-btn px-4 text-white"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
}
     </Fragment>
  );
}
