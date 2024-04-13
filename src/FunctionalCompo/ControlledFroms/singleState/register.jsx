import { useState } from 'react'
import './register.css'
const Register = ()=>{

    const [formErr,setFormErr] = useState({
        usernameErr : null,
        passwordErr : null
    })

   const [form,setForm] = useState({

    username : null,
    password : null

    })

    const colorChnage = ()=>{
       let formNew = document.getElementById('formNew')
       formNew.style.background='#7E25CA'
       formNew.style.color='white'

       let overLap = document.getElementById('overLap')
       overLap.style.background = 'white'
    }

    const change = ()=>{
        let formNew = document.getElementById('formNew')
       formNew.style.background='white'
       formNew.style.color='black'

       let overLap = document.getElementById('overLap')
       overLap.style.background = '#7E25CA'


    }

    const onchangeHandler = (event)=>{
        const {value,name} = event.target

        setForm(prevState => ({
            ...prevState,[name] : value
        }))

        switch(name){
            case 'username': 
            if (value.length < 6) {
              setFormErr(prevState => ({
                ...prevState,
                usernameErr: 'UserName length should be greater than 6'
              }));
            } else {
              setFormErr(prevState => ({
                ...prevState,
                usernameErr: null
              }));
            }
            break;
          case 'password':
            if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
                setFormErr((prevState) => ({
                    ...prevState,
                    passwordErr: 'Password should be at least 6 characters long and contain at least one special character'
                }));
            }  else {
              setFormErr(prevState => ({
                ...prevState,
                passwordErr: null
              }));
            }
            break;
          
            default :
            break
        }

    }
    return(
        <div id="container">
            <div id='overLap' onMouseLeave={change}></div>
            <form id='formNew' onMouseOver={colorChnage}>
          <h2>SignUp Form</h2>
          <label>UserName :</label>
          <input
            type="text"
            placeholder="Name"
            value={form.username}
            onChange={onchangeHandler}
            name='username'
          />
          {
            formErr.usernameErr ? <span>UserName length should be greater than 5 char</span> : null
          }
          <label>Password :</label>
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={onchangeHandler}
            name='password'
          />
          {
            formErr.passwordErr ? <span>Password has at least one Special Character </span> : null
          }
          <input id="btn" type="Submit" value="Create Account" />
        </form>
      </div>
    )
}
export default Register