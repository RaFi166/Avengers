import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Blogs = () => {
    const [blogdata, setBlogdata] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => setBlogdata(data))
    }, []);


    return (
        <div className="">
            {
                blogdata.map(allData =>
                    <div className="blogs" key={allData.id}>
                        <div className="">
                            <h1>Avenger no {allData.id}</h1>
                        </div>
                        <div className="">
                            <p>{allData.title}</p>
                            <Link to={`/blog/${allData.id}`}>
                                <button>Show details</button>
                            </Link>
                        </div>
                    </div>

                )
            }
        </div>
    )
}

export default Blogs
