import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router'

const SingleBlogDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const [singledata, setSingledata] = useState({});
    const URL = `http://localhost:8000/blogs/${id}`;
    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => setSingledata(data))
    }, [])

    const handleDelete = () => {
        fetch(URL, {
            method: "DELETE"
        })
            .then(() => {
                history.push('/');
            })
    }

    return (
        <div>
            <h1>Avenger No : {singledata.id}</h1>
            <h2>{singledata.title}</h2>
            <h4>{singledata.body}</h4>
            <button onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default SingleBlogDetails
