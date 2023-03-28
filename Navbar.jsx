import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <h1>Store Finder</h1>
            <span>
            <Link to="/">go back home</Link>
            </span>
        </div>
    )
}
export default Navbar;