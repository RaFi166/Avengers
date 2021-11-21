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
        fetch('http://localhost:8000/blogs', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(heroes)
        })
        history.push('/');
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" onBlur={getTitle} name="" id="" />
                <input type="text" onBlur={getBody} />
                <button>Add Super Heroes</button>
            </form>
        </div>
    )
}

export default AddAvengers
