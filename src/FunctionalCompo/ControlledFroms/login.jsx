import './log.css'

const LogInForm =()=>{

    const fromHandler = (event)=>{
        event.preventDefault()
        window.location.assign('./register.js')
    }

    return(
        <div className="container">
            <form onSubmit={fromHandler}>
                <h2>LogIn Form</h2>
                <label>UserName</label>
                <input type="text" name="" id="" />
                <label>Password</label>
                <input type="password" name="" id="" />
                <input id='btn' type="submit" value='LogIn' />
            </form>
        </div>
    )
}
export default LogInForm