import "./reg.css";
import { useState } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [userNameErr, setUserNameErr] = useState(null);
  const [passwordErr, setPasswordErr] = useState(null);

  const nameHandler = (event) => {
    const userName = event.target.value;
    setName(userName);
    if (userName.trim().length < 6) {
      setUserNameErr("UserName length should be > 5 characters");
    } else setUserNameErr(null);
  };
  const passwordHandler = (event) => {
    const password = event.target.value;
    setPassword(password);
    if (password && password[0].charCodeAt() >= 65 && password[0].charCodeAt() <= 90) {
      setPasswordErr(null);
    } else setPasswordErr("Password must start with an uppercase letter");
  };
  
  const mailHandler = (event) => {;
  const email = event.target.value
  setMail(email)
  };

  const formHandler = (event)=>{
    event.preventDefault()

    const objDetails = {
        name : name,
        mail : mail,
        password : password,
        id : Math.random()
    }

    console.log(objDetails);
    window.location.assign('./login.jsx')


  }

  return (
    <div id="container">
      <form onSubmit={formHandler}>
        <h2>SignUp Form</h2>
        <label>UserName :</label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameHandler}
        />
        {userNameErr && <span>UserName length should be greater 5 characters</span>}
        <label id="mail">Email :</label>
        <input
          type="email"
          placeholder="Email"
          value={mail}
          onChange={mailHandler}
        />
        <label>Password :</label>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={passwordHandler}
        />
        {passwordErr && (
          <span>Password must be start with an upperCase</span>
        )}
        <input id="btn" type="Submit" value="Create Account" />
      </form>
    </div>
  );
};
export default RegisterForm;
