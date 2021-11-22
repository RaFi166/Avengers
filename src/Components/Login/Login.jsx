import React from 'react'
import { Link } from 'react-router-dom';
import useFirebaseHooks from '../useFirebaseHooks/useFirebaseHook'

const Login = () => {
    const { googleSignIn, logout, user } = useFirebaseHooks();
    return (
        <div>
            <div className="shadow-inner shadow-xl mb-32 rounded-2xl bg-green-400 bg-opacity-80 text-center mt-20 p-10 w-2/5 mx-auto">
                <div>
                    <form>
                        <input className="mb-5 rounded w-80" placeholder="Enter Email" required type="text" name="" id="" /> <br />
                        <input className="w-80 rounded" placeholder="Enter Password" required type="password" /> <br />
                        <button className="pl-2 pr-2 p-1 bg-green-800 rounded mt-5 font-semibold text-white">Login</button>
                    </form>
                    <button onClick={googleSignIn} className="p-1 bg-green-800 text-white font-bold rounded-2xl mt-2">Sign in Using Goggle</button>
                    <Link to="/register">
                        <button className="bg-indigo-400 p-2 rounded mr-2 ml-2">Register?</button>
                    </Link>
                    <button onClick={logout} className="p-2 bg-indigo-400">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Login
