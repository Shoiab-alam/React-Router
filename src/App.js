import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home  from './component/Home';
import About  from './component/About';
import Contact  from './component/Contact';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='*' element={<div>Error Page</div>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
