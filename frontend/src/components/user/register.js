import {  Fragment, useEffect,useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import MetaData from "../layouts/MetaData";
import { register } from "../../actions/userAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { clearAuthError } from "../../actions/userAction";

export default function Register() {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setavatar] = useState("");
  const dispatch = useDispatch();
  const [avatarpreview, setavatarpreview] = useState(
    "images/default-avatar.jpg"
  );
  const navigate=useNavigate();
  const {loading,error,isAuthenticated}=useSelector((state)=>state.authState);
  const onchange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setavatarpreview(reader.result);
          setavatar(e.target.files[0]);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setuserData({ ...userData, [e.target.name]: e.target.value });
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);
    formData.append("password", userData.password);
    formData.append("avatar", avatar);
    dispatch(register(formData));
  };

  useEffect(()=>{
    if(isAuthenticated){
      navigate('/')
      return
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
      <MetaData title={"register"}></MetaData>
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form
          onSubmit={submitHandler}
          className="shadow-lg"
          encType="multipart/form-data"
        >
          <h1 className="mb-3">Register</h1>

          <div className="form-group">
            <label htmlfor="email_field">Name</label>
            <input
              type="name"
              id="name_field"
              className="form-control"
              name="name"
              onChange={onchange}
             
            />
          </div>

          <div className="form-group">
            <label htmlfor="email_field">Email</label>
            <input
              type="email"
              id="email_field"
              name="email"
              onChange={onchange}
              className="form-control"
             
            />
          </div>

          <div className="form-group">
            <label htmlfor="password_field">Password</label>
            <input
              type="password"
              id="password_field"
              name="password"
              onChange={onchange}
              className="form-control"
             
            />
          </div>

          <div className="form-group">
            <label htmlfor="avatar_upload">Avatar</label>
            <div className="d-flex align-items-center">
              <div>
                <figure className="avatar mr-3 item-rtl">
                  <img
                    src={avatarpreview}
                    className="rounded-circle"
                    alt="image"
                  />
                </figure>
              </div>
              <div className="custom-file">
                <input
                  type="file"
                  name="avatar"
                  onChange={onchange}
                  className="custom-file-input"
                  id="customFile"
                />
                <label className="custom-file-label" htmlfor="customFile">
                  Choose Avatar
                </label>
              </div>
            </div>
          </div>

          <button
            id="register_button"
            type="submit"
            className="btn btn-block py-3"
            disabled={loading}
          >
            REGISTER
          </button>
        </form>
      </div>
    </div>
    </Fragment>
  );
}
