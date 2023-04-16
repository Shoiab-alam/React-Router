import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
 return (
  <>
    <header className="">
      <nav className="">
        <ul className="flex justify-around bg-black text-white p-5">
            <NavLink to='/'>ABOUT US</NavLink>
            <NavLink to='/service'>SERVICE</NavLink>
            <NavLink to='/search'>SEARCH</NavLink>
            <NavLink to='/contact'>CONTACT US</NavLink>
            <NavLink to='/user/shoaib/alam'>USER</NavLink>
          
        </ul>
      </nav>
    </header>
  </>
 )
}

 export default Header