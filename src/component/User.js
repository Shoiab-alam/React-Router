import React from "react";
import Header from "./Header";
import { useLocation, useParams} from "react-router-dom";

const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation()

    return(<>
    <Header></Header>
        <h1>User {fname} {lname} Page</h1>
        <h2>MY Current Location is {location.pathname}</h2>
        {location.pathname === '/user/shoaib/alam'? <button>Click Me</button>: <p>hhh</p>}
        </>
    )
}

export default User;