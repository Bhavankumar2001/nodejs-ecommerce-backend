import axios from "axios";
import { loginFailed, loginRequest, loginSucess,clearError,registerRequest,registerSucess,registerFailed } from "../slices/authSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`/api/v1/login`, { email, password });
    dispatch(loginSucess(data));
  } catch (error) {
    dispatch(loginFailed(error.response.data.message));
  }
};
export const clearAuthError = dispatch =>{
dispatch(clearError());
}

export const register = (userdata) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const config ={
      Headers:{
        'content-type':'multipart/form-data'
      }
    }
    const { data } = await axios.post(`/api/v1/register`,userdata,config);
    dispatch(registerSucess(data));
  } catch (error) {
    dispatch(registerFailed(error.response.data.message));
  }
};