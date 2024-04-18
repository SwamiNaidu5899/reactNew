import './signUp.css'
const SignUp = ()=>{
    return(
        <div className='container-form'>
        <form>
            <h2>SignUp Form</h2>
            <input type='text' placeholder="UserName"/>
            <input type='email' placeholder="Email"/>
            <input type='password' placeholder="Enter Password"/>
            <input type='password' placeholder="Confirm Password"/>
            <input type='submit' value='SignUp'/>
        </form>
        </div>
    )
}
export default SignUp