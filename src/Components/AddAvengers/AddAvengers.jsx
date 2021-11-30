import React, { useState } from 'react'

import { useHistory } from 'react-router';

const AddAvengers = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const history = useHistory();

    const getTitle = (e) => {
        setTitle(e.target.value)
    }
    const getBody = (e) => {
        setBody(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        const heroes = { title, body };
        console.log(heroes);
        fetch('http://localhost:8000/avengers', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(heroes)
        })
        history.push('/');
    };

    return (
        <div className="shadow-inner shadow-xl mb-32 rounded-2xl bg-green-400 bg-opacity-80 text-center mt-20 p-10 w-2/5 mx-auto">
            <div>
                <form className="" onSubmit={submitHandler}>
                    <input className="mb-5 w-2/3 rounded w-80" placeholder="Enter Title" type="text" required onBlur={getTitle} name="" id="" /> <br />
                    <input required className="w-2/3 rounded" placeholder="Add Body" type="text" onBlur={getBody} /> <br />
                    <button className="pl-2 pr-2 p-1 bg-green-800 rounded mt-5 font-semibold text-white">Add New</button>
                </form>
            </div>
        </div>
    )
}

export default AddAvengers
