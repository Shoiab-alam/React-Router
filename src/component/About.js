import React from "react";
import { NavLink } from "react-router-dom";
const About = () => {
    return(
        <div>
        <ul>
            <li to='/'>Home</li>
            <li to='/about'>About</li>
            <li to='/contact'>Contact</li>
        </ul>
        <h1>About</h1>
    </div>
    )
}

export default About;