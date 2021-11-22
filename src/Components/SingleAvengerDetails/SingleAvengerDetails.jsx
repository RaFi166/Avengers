import React, { useState } from 'react'
import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router'

const SingleAvengerDetails = () => {
    const history = useHistory();
    const { id } = useParams();
    const [singledata, setSingledata] = useState({});
    const URL = `http://localhost:8000/avengers/${id}`;
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
        <div className="w-2/5 shadow-xl shadow mx-auto mt-20 mb-20">
            <h1 className="text-center mb-10 font-bold text-3xl">Avenger No : {singledata.id}</h1>
            <h2 className="font-medium text-2xl mb-5">{singledata.title}</h2>
            <h4 className="mb-5 text-justify">{singledata.body}</h4>
            <button className="mb-5 bg-red-500 text-white font-bold p-1 rounded" onClick={handleDelete}>DELETE</button>
        </div>
    )
}

export default SingleAvengerDetails
