import axios from "axios";
import { productFailed, productRequest, productSucess } from '../slices/productSlice'
import {
  productsFailed,
  productsRequest,
  productsSucess,
} from "../slices/productsSlice";
export const getProducts =
  (keyword, price,category,rating, currentpage) => async (dispatch) => {
    try {
      dispatch(productsRequest());
      let link = `/api/v1/products?page=${currentpage}`;
      if (keyword) {
        link += `&keyword=${keyword}`;
      }
      if (price) {
        link += `&price[gte]=${price[0]}&price[lte]=${price[1]}`;
      }
      if (category) {
        link += `&category=${category}`;
      }
      if (rating) {
        link += `&ratings=${rating}`;
      }

      const { data } = await axios.get(link);
      dispatch(productsSucess(data));
    } catch (error) {
      dispatch(productsFailed(error.response.data.message));
    }
  };
 
export const getProduct = id =>async(dispatch)=>{
try{
    dispatch(productRequest())
const {data}=await axios.get(`/api/v1/product/${id}`)
dispatch(productSucess(data))
}catch(error){
    // const errorMessage = error.response ? error.response.data.message : 'An unexpected error occurred';
    dispatch(productFailed(error.response.data.message));

}
    
}
