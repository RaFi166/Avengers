import React from 'react';
import { Link } from 'react-router-dom';
import useFirebaseHooks from '../useFirebaseHooks/useFirebaseHook';


const Navbar = () => {
    const {logout, user} = useFirebaseHooks();
    return (
        <div className="container w-3/4  mx-auto">
            <nav className="grid grid-cols-2 my-nav">
                <div>
                    <Link to="/">
                        <h3 className="font-bold text-green-600" style={{ fontSize: "30px" }}>Avengers</h3>
                    </Link>
                </div>


                <div className="mt-3">
                    <ul className="flex font-semibold">
                        <li className="hover:text-green-600"> <Link to="/home">Avengers </Link></li>
                        <li className="hover:text-green-600"> <Link to="/about"> About</Link></li>
                        <li className="hover:text-green-600"> <Link to="/create-avengers"> Add Avenger</Link></li>
                        {
                            user?.email && <li> <button onClick={logout} className="font-semibold hover:text-green-600">Logout</button></li>
                        }
                            {
                                !user?.email && <li className="hover:text-green-600"> <Link to="/login-signup"> Login</Link></li>
                            }
                            {
                                 user?.email && <p className=" ml-4 text-black font-medium">Hi {user.displayName}</p>
                            }
                        
                       
                        
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
