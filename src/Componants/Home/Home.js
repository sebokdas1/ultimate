import React, { useEffect, useState } from 'react';
import './Home.css';

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

    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='bg-[#1678CB] rounded-[5px] px-[42px] py-[15px] text-[36px] font-bold text-white'>Attendance information</h1>
            </div>

            <div className='mt-[79px] mx-auto w-[90%]'>
                <div className="">
                    <table className="table table-compact w-full">
                        <thead className='bg-white'>
                            <tr >
                                <th className='text-start'>Date</th>
                                <th className='text-start'>Employee Name</th>
                                <th className='text-start'>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1/11/22</td>
                                <td>{userData[2]?.name}</td>
                                <td>{userData[2]?.attendance["2022-11-01"]?.status}</td>
                            </tr>
                            <tr>
                                <td>2/11/22</td>
                                <td className='mt-2 text-[#222730]'>{userData[4]?.name}</td>
                                <td>{userData[2]?.attendance["2022-11-02"]?.status}</td>
                            </tr>
                            <tr>
                                <td>8/11/22</td>
                                <td className='mt-2 text-[#222730]'>{userData[5]?.name}</td>
                                <td>{userData[2]?.attendance["2022-11-08"]?.status}</td>
                            </tr>
                            <tr>
                                <td>28/11/22</td>
                                <td className='mt-2 text-[#222730]'>{userData[8]?.name}</td>
                                <td>{userData[2]?.attendance["2022-11-28"]?.status}</td>
                            </tr>
                            <tr>
                                <td>11/11/22</td>
                                <td className='mt-2 text-[#222730]'>{userData[10]?.name}</td>
                                <td>{userData[2]?.attendance["2022-11-11"]?.status}</td>
                            </tr>
                            <tr>
                                <td>30/11/22</td>
                                <td className='mt-2 text-[#222730]'>{userData[11]?.name}</td>
                                <td>{userData[2]?.attendance["2022-11-30"]?.status}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;