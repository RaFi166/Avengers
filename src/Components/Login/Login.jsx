import React from 'react'
import { Link } from 'react-router-dom';
import useFirebaseHooks from '../useFirebaseHooks/useFirebaseHook'

const Login = () => {
    const { googleSignIn, logout, user, getEmail, getPassword, loginUser, error,forgotPassword} = useFirebaseHooks();
    return (
        <div>
            <div className="bg-white shadow-xl shadow-2xl rounded shadow-xl mb-32 rounded-2xl  text-center mt-20 p-10 w-2/5 mx-auto">
                <div>

                    <p className="text-red-500">{error}</p>
                    <form className="border-t-2 pt-2">
                        <input onBlur={getEmail} className="mb-5 border-2 border-black rounded w-80" placeholder="Enter Email" required type="text"  /> <br />
                        <input onBlur={getPassword} className="w-80 rounded border-2 border-black" placeholder="Enter Password" required type="password" /> <br />
                        <button onClick={loginUser} className="pl-6 pr-6 p-1 shadow bg-purple-500 rounded mt-5 font-semibold text-white">Login</button>
                    </form>
                    <button onClick={googleSignIn} className="p-1 pl-6 pr-6 shadow bg-purple-500 text-white font-semibold rounded-2xl mt-2">Sign in Using Goggle</button>
                    <p className="mt-4 hover:text-green-600 pb-4 border-b-2"> <button onClick={forgotPassword} >Forgotten Password? </button> </p>
                    <br />

                    <Link to="/register">
                        <button className="shadow bg-purple-500 font-semibold p-2 pl-6 pr-6 text-white rounded mr-2 ml-2">Create A New Account</button>
                    </Link>

                    
                </div>
            </div>
        </div>
    )
}

export default Login
