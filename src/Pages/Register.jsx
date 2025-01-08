import React, { useState } from "react";
import axios from "axios"

const Register=()=>{
    const [inputs,setInputs]=useState({
        username:"",
        email:"",
        password:""
    })

    const handlechange=e=>{
        setInputs(prev=>({...prev,[e.target.name]:e.target.value}))}
    
    const handleSubmit= e=>{
        e.preventDefault()
        const res= axios.post("/auth/register",inputs)
    }

    return(
        <div className="page-body">
            <div className="page-box">
                <h2 style={{fontSize:40}}>Register</h2>
                <form>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" required onChange={handlechange}/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required onChange={handlechange}/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required onChange={handlechange}/><br/>
                <button type="submit" onClick={handleSubmit} style={{fontSize:'0.7rem'}}>Register</button>
                </form><br/>
                <a href="/Login" id="loglink" style={{fontSize:"0.7em"}}>already a user? Login here</a>

            </div>
            
        </div>
    )
}
export default Register