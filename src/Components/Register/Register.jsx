import React from 'react'
import useFirebaseHooks from '../useFirebaseHooks/useFirebaseHook'

const Register = () => {
    const { getEmail, getPassword, regSubmission } = useFirebaseHooks();
    return (
        <div>
            <div className="shadow-inner shadow-xl mb-32 rounded-2xl bg-green-400 bg-opacity-80 text-center mt-20 p-10 w-2/5 mx-auto">
                <div>
                    <form onSubmit={regSubmission}>
                        <input onBlur={getEmail} className="mb-5 w-2/3 rounded w-80" placeholder="Enter Email" required type="text" name="" id="" /> <br />
                        <input onBlur={getPassword} className="w-2/3 rounded" placeholder="Enter Password" required type="password" /> <br />
                        <button className="pl-2 pr-2 p-1 bg-green-800 rounded mt-5 font-semibold text-white">Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
