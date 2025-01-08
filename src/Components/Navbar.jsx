import React from "react";
import logo from '../images/logobg.png'; // Adjust path as necessary


const Navbar=()=>{
    return(
        <div>
        <div class="navbar">
        
        <div class="logo-section">
            <img src={logo} alt="Logo" class="logo"/>
            <span class="name">MyWebsite</span>
        </div>
        
        <ul class="nav-tabs">
            <li><a href="#about">Art</a></li>
            <li><a href="#services">Science</a></li>
            <li><a href="#contact">Technology</a></li>
            <li><a href="#contact">Movies</a></li>
            <li><a href="#contact">Design</a></li>
            <li><a href="#contact">Food</a></li>
            <li><a href="/Write">Write</a></li>
            <li><a href="#">Logout</a></li>
        </ul>
    </div>
        </div>
    )
}
export default Navbar