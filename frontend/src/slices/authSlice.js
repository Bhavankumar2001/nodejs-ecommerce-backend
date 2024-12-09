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
        }

    }
})
const{actions,reducer}=authSlice
export const {loginRequest,loginSucess,loginFailed}=actions
export default reducer;