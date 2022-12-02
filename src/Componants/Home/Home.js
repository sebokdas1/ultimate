import React, { useEffect, useState } from 'react';

const Home = () => {
    const [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('https://test.nexisltd.com/test', {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setUserData(data))
    }, [])
    console.log(userData)
    return (
        <div>
            {/* {userData?.length} */}
        </div>
    );
};

export default Home;