import { createSlice } from "@reduxjs/toolkit";
// import { act } from "react";
const authSlice =createSlice({

    name:'auth',
    initialState:{
        loading : false,
       isAuthenticated:false
    },
    reducers:{
        loginRequest(state,action){
            return{
                ...state,
                loading:true
            }
     

        },
        loginSucess(state,action){
            return{
            
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
               
            }
        },
        loginFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },
        clearError(state,action){
            return{
                ...state,
              error:null,
            }
        },
        registerRequest(state,action){
            return{
                ...state,
                loading:true
            }
     

        },
        registerSucess(state,action){
            return{
            
                loading:false,
                isAuthenticated:true,
                user:action.payload.user
               
            }
        },
        registerFailed(state,action){
            return{
                ...state,
                loading:false,
                error:action.payload
            }
        },

    }
})
const{actions,reducer}=authSlice
export const {loginRequest,loginSucess,loginFailed,clearError,registerRequest,registerSucess,registerFailed}=actions
export default reducer;