import React, { useState } from 'react';
import axios from 'axios';

const Api = () => {
    const [post, setPost] = useState({});

    const fetchData = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts/10').then(res => {
            console.log(res.data);
            setPost(res.data.slice(0-5));
        }
        ).catch(error => {
            console.log(error);
        });
    }

    useEffect(() => {
        fetchData();
    },[]);

    return (
        <ReactFragment>
        {
        <div>
            {age}
            <br />
            Title:
            {post.title}
        </div>
        }
        </ReactFragment>
    )
}

export default Api;

// task
//fetch data from api in the form of array and display 5 records in UI
//use api: http://jsonplaceholder.typicode.com/users/