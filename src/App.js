import React from "react";
import './App.css';
import About from "./component/About";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from './component/Service';
import User from "./component/User";
import Name from "./component/Name";
import Search from './component/Search'
const App = () => {


  return (<>
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<About name='About'/>} />
        <Route exact path='/service' element={<Service name='Service'/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/contact/Name' element={<Name />} />
        <Route path="/user/:fname/:lname" element={<User/>} />
        <Route path="/search" element={<Search/>} />
        <Route path='*' element={<div>OOps! Page not found!</div>} />
    </Routes>
  </BrowserRouter>

  </>)
}

export default App;
