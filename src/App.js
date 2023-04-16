import React from "react";
import About from "./component/About";
import Home from "./component/Home";
import Contact from "./component/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainHome from './component/MainHome';
const App = () => {
  return(<>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainHome/>}>
          <Route index element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<div>Page Error</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}

export default App;