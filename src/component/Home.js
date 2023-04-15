import React from "react";
import { NavLink } from "react-router-dom";
const Home = () => {
    return(
        <div>
            <ul>
                <li to='/'>Home</li>
                <li to='/about'>About</li>
                <li to='/contact'>Contact</li>
            </ul>
            <h1>Home</h1>
        </div>
    )
}

export default Home;