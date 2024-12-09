import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
const productsSlice =createSlice({

    name:'products',
    initialState:{
        loading : false
    },
    reducers:{
        productsRequest(state,action){
            return{
                loading:true
            }
     

        },
        productsSucess(state,action){
            return{
                loading:false,
                products:action.payload.products,
                productsCount:action.payload.count,
                resPerPage:action.payload.resPerPage

            }
        },
        productsFailed(state,action){
            return{
                loading:false,
                error:action.payload
            }
        }

    }
})
const{actions,reducer}=productsSlice
export const {productsRequest,productsSucess,productsFailed}=actions
export default reducer;