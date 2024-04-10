import "./form.css";

import { useRef, useState } from "react";

const RegisterForm = () => {
  const userNameRef = useRef("");
  const passwordRef = useRef("");
  const userMailRef = useRef('')

  const [userData,setUserData] = useState([])


  const formHandler = (e) => {
    e.preventDefault();
  
    let userNameInput =  userNameRef.current.value
    let passwordInput = passwordRef.current.value
    let mailInput = userMailRef.current.value

   

    const detailsObj = {
      name: userNameInput,
      password: passwordInput,
      mail : mailInput
    };
   

    if(userNameInput.length<5 && passwordInput.length<5){
      alert('Length must be grater than 5 char')
    }
    else{
      const userInfo = [...userData,detailsObj]
      setUserData(userInfo)
    }
    userNameRef.current.value=''
    passwordRef.current.value=''
    userMailRef.current.value=''
    
  };

  return (
    <div id="container">
      <form className="formDiv" onSubmit={formHandler}>
        <h2>Registration Form</h2>
        <input type="text" placeholder="Username" ref={userNameRef} />
        <input type="email" placeholder="Email" ref={userMailRef}/>
        <input
          type="password"
          placeholder="Password"
          autoComplete="on"
          ref={passwordRef}
        />
        <input type="submit" />
      </form>

      <table>
      <thead>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
            </thead>
            {
       userData.map((eachI,i)=>{
        const {name,mail,password} = eachI
        return(
            <tbody>
              <td>{name}</td>
              <td>{mail}</td>
              <td>{password}</td>
            </tbody>
        )
       })
      }
      </table>
     
      
    </div>
  );
};
export default RegisterForm;
