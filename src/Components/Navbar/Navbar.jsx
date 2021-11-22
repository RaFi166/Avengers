import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="container w-3/4  mx-auto">
            <nav className="grid grid-cols-3 my-nav">
                <div>
                    <Link to="/">
                        <h3 className="font-bold text-green-600" style={{ fontSize: "30px" }}>Avengers</h3>
                    </Link>
                </div>

                <div>
                    <input className="bg-gray-200 mt-3 w-80 appearance-none border-2 border-green-800 rounded      focus:border-purple-200" id="inline-full-name" placeholder="Search Here" type="text" />
                </div>

                <div className="mt-3">
                    <ul className="flex font-semibold">
                        <li className="hover:text-green-600"> <Link to="/home">Avengers </Link></li>
                        <li className="hover:text-green-600"> <Link to="/about"> About</Link></li>
                        <li className="hover:text-green-600"> <Link to="/create-avengers"> Add Avenger</Link></li>
                        <li className="hover:text-green-600"> <Link to="/login-signup"> Login</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
