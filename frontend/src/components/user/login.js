import { Fragment, useEffect, useState } from "react";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearAuthError, login } from "../../actions/userAction";
import { Link } from 'react-router-dom'
export default function Login() {

  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const dispatch =useDispatch();
  const navigate=useNavigate();
  const {loading,error,isAuthenticated}=useSelector((state)=>state.authState);
  const submitHandler=(e)=>{
    e.preventDefault();
    dispatch(login(email,password));
  
  }
   useEffect(()=>{
    if(isAuthenticated){
      navigate('/')
      
    }
    if(error){
      toast(error,{
        position:"bottom-center",
        type:'error',
        onOpen:()=>{dispatch(clearAuthError)}
      })
      return
    }
  
   },[error,isAuthenticated,dispatch,navigate])

  return (
    <Fragment>
      <MetaData title={"login"}></MetaData>
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form onSubmit={submitHandler} className="shadow-lg">
            <h1 className="mb-3">Login</h1>
            <div className="form-group">
              <label htmlFor="email_field">Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={e =>setemail(e.target.value)}
                
              />
            </div>

            <div className="form-group">
              <label htmlFor="password_field">Password</label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={e =>setpassword(e.target.value)}
              />
            </div>

            <a href="#" className="float-right mb-4">
              Forgot Password?
            </a>

            <button
              id="login_button"
              type="submit"
              className="btn btn-block py-3"
              disabled={loading}
            >
              LOGIN
            </button>

            <Link to='/register'  className="float-right mt-3">
              New User?
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
