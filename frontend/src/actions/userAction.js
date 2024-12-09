import axios from "axios";
import { loginFailed, loginRequest, loginSucess } from "../slices/authSlice";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const { data } = await axios.post(`/api/v1/login`, { email, password });
    dispatch(loginSucess(data));
  } catch (error) {
    dispatch(loginFailed(error.response.data.message));
  }
};
