import React from "react";

const Login=()=>{
    return(
        <div className="page-body">

        <div className="page-box">
            <h2>Login form</h2>
            <form>
                <label htmlFor="username">Username:</label><br/>
                <input type="text" id="username" name="username" required/><br/>
                <label htmlFor="password">Password:</label><br/>
                <input type="password" id="password" name="password" required/><br/>
                <button type="submit">Login</button>

            </form>
            <br/>
            <a href="/Register" style={{fontSize:'0.7em'}}>New User? Register here</a>
        </div>
     </div>
    )
}
export default Login