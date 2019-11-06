import React       from 'react'
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="img/logo.svg"  alt=""/>
            </div>
            <NavLink exact className="link" to='/'>Home</NavLink>
            <NavLink className="link" to='/about'>About</NavLink>
            <NavLink className="link" to='/login'>Login</NavLink>
            <NavLink className="link" to='/my-test'>Test</NavLink>
        </div>
    )
};

export default Header;