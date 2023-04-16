import React from "react";
import Header from "./Header";

const About = (props) => {

  return (<>
  <Header></Header>
    <h1>This is {props.name} Page</h1>
  </>)
}

export default About