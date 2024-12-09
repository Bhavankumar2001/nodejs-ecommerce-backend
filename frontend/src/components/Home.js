import React, { Fragment, useEffect, useState } from "react";
import MetaData from "./layouts/MetaData";
import { getProducts } from "../actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./layouts/Loader";
import Product from "./product/Product";
import { toast } from "react-toastify";
import Pagination from "react-js-pagination";

export default function Home() {
  const dispatch = useDispatch();

  const { products, loading, error, productsCount, resPerPage } = useSelector(
    (state) => state.productsState
  );
  const [currentpage, setcurrentpage] = useState(1);
  console.log(currentpage);
  
  const setcurrentpageNo = (pageNo) => {
    setcurrentpage(pageNo);
  };
  useEffect(() => {
    if (error) {
      return toast.error(error, { position: "bottom-center" });
    }
   // Dispatch action with current page
   dispatch(getProducts(null,null,null,null,currentpage));
  }, [error, dispatch, currentpage]); // Include `error` in the dependency array

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={"Buy Best Products"} />
          <h1 id="products_heading">Latest Products</h1>

          <section id="products" className="container mt-5">
            <div className="row">
              {products &&
                products.map((product) => (
                  <Product col ={3} key={product._id} product={product} />
                ))}
            </div>
          </section>
          {productsCount > 0 && productsCount > resPerPage? (
            <div className="d-flex justify-content-center mt-5">
              <Pagination
                activePage={currentpage}
                onChange={setcurrentpageNo}
                totalItemsCount={productsCount}
                itemsCountPerPage={resPerPage}
                nextPageText={'Next'}
                firstPageText={'First'}
                lastPageText={'Last'}
                itemClass={'page-item'}
                linkClass={'page-link'}
              />
            </div>
          ) : null}
        </Fragment>
      )}
    </Fragment>
  );
}
