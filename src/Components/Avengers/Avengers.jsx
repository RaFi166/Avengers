import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Avengers = () => {
    const [avengerdata, setavengerdata] = useState([]);
    const [filteredData, setfilteredData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/avengers')
            .then(res => res.json())
            .then(data => {
                setavengerdata(data);
                setfilteredData(data)
            })
    }, []);

    const searchChanged = (e) => {
        const getsearchValue = e.target.value;
        const matchedValue = avengerdata.filter(filterData =>
            filterData.name.toLowerCase().includes(getsearchValue.toLowerCase())
        )
        setfilteredData(matchedValue);
        console.log(matchedValue.length);
    }

    return (
        <>
            <div>
                <input type="text" onChange={searchChanged} placeholder="Search Avengers" className="w-1/2 border-solid border-4 border-light-blue-500 " />
            </div>
            <div className="">
                {
                    filteredData.map(allData =>
                        <div className=" mb-10 shadow grid grid-cols-2" key={allData.id}>
                            <div className="grid items-center">
                                <h1 className="font-semibold">Avenger no {allData.id}</h1>
                            </div>
                            <div className="font-medium">
                                <p>{allData.title}</p>
                                <Link to={`/blog/${allData.id}`}>
                                    <button className="bg-green-500 font-medium p-1 mt-2 mb-2 rounded">Show details</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )
}

export default Avengers
