import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
const productSlice =createSlice({

    name:'product',
    initialState:{
        loading : false,
        products:{}
    },
    reducers:{
        productRequest(state,action){
            return{
                loading:true
            }
     

        },
        productSucess(state,action){
            return{
                loading:false,
                products:action.payload.product

            }
        },
        productFailed(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }

    }
})
const{actions,reducer}=productSlice
export const {productRequest,productSucess,productFailed}=actions
export default reducer;