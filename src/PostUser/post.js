import axios from "axios"
import "./post.css";
// import {useNavigate} from 'react-router-dom'

import facebook from "./facebook.png";
import github from "./github.png";
import twitter from "./twitter.png";
import { useState } from "react";
const PostUser = () => {
  const [form, setForm] = useState({
    username: null,
    password: null,
  });

  const [logIn,setLogIn] = useState(false)
  const [res,setRes] = useState(null)

  const changeHandler = (event) => {
    const { value, name } = event.target;

    setForm((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const formHandler =(event)=>{
    event.preventDefault()
    const {username,password} = form
    const userDetails = {
        username : username,
        password : password,
    }

    // hitApi(userDetails)

    axiosMethod(userDetails)

    // console.log(userDetails);
  }

//   const hitApi = async(userInfo) => {

//     const result = await fetch("https://dummyjson.com/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(userInfo),
//     })
//      const data = await result.json()

//     if(data.message){
//         alert(data.message)
//         setForm(false)
//     }
//     else{
//         alert('Hello! '+data.username)
//         setForm(true)
//         setRes(data)
//     }

//      console.log(data);
//   };

  // const homeNavigator = useNavigate()

  // const goToHome = ()=>{
  //     homeNavigator('/')
  // }

  // const goToSignUp = ()=>{
  //   homeNavigator('/contact')
  // }

  const axiosMethod = async(userInfo)=>{
    const response = await axios.post('https://dummyjson.com/auth/login',userInfo)
    if(response.message){
                alert(response.message)
                setLogIn(false)
            }
            else{
                alert('Hello! '+response.username)
                setLogIn(true)
                setRes(response)
            }
  }

  return (
    <div className="containerSignIn">
      <form id="signInForm" onSubmit={formHandler}>
        <h3>Welcome back!</h3>
        <h4>Please sign in to ur account</h4>
        <input
          type="text"
          placeholder="UserName"
          onChange={changeHandler}
          value={form.username}
          name="username"
        />
        {
            logIn && <h3>Welocome user</h3>
        }
        <input
          type="password"
          placeholder="Password"
          onChange={changeHandler}
          value={form.password}
          name="password"
        />
        <div id="btnDiv">
          <h6 id="forgot-password">Forgot Password</h6>
          <input id="btnlogIn" type="submit" value="LogIn" />
        </div>
        <div id="iconDiv">
          <h5>Or Signup using</h5>
          <div className="icons">
            <img src={facebook} height="35" alt="" />
            <img src={github} height="35" alt="" />
            <img src={twitter} height="35" alt="" />
          </div>
          {/* <button id="btnHome" onClick={goToHome}>Home</button> */}
          <p>Don't have an account</p>
          {/* <button id="btnSignUp" onClick={goToSignUp}>SignUp</button> */}
        </div>
      </form>
    </div>
  );
};
export default PostUser;
