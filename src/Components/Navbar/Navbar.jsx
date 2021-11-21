import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="">
            <nav className="">
                <h3 style={{ color: "#f1356d", fontSize: "30px" }}>Avengers</h3>
               
                <div className="-2">
                    <ul className="">
                    <input type="text" />
                        <li> <Link to="/home">Avengers </Link></li>
                        <li> <Link to="/about"> About</Link></li>
                        <li> <Link to="/create-avengers"> Add New Super-Heroes</Link></li>
                        <li> <Link to="/login-signup"> Login or Signup</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
