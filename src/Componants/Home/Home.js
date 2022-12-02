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
    console.log(userData)

    return (
        <div>
            <div className='flex justify-center'>
                <h1 className='bg-[#1678CB] rounded-[5px] px-[42px] py-[15px] text-[36px] font-bold text-white'>Attendance information</h1>
            </div>

            <div className='mt-[79px] mx-auto w-[90%]'>
                <div className="">
                    <table className="table-fixed  w-full">
                        <thead className='bg-white'>
                            <tr >
                                <th className='text-start'>Date</th>
                                <th className='text-start'>Employee Name</th>
                                <th className='text-start'>Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {/* <td>{userData[2]?.attendance ? .(2022 - 11 - 01).date()}</td> */}
                                <td></td>
                                <td>{userData[2]?.name}</td>
                                {/* <td>{Object?.values(userData[2]?.attendance['holiday'])}</td> */}
                            </tr>
                            <tr>
                                {/* <td>{userData[2]?.attendance ? .(2022 - 11 - 01).date()}</td> */}
                                <td></td>
                                <td className='mt-2 text-[#222730]'>{userData[4]?.name}</td>
                                {/* <td>{Object?.values(userData[2]?.attendance['holiday'])}</td> */}
                            </tr>
                            <tr>
                                {/* <td>{userData[2]?.attendance ? .(2022 - 11 - 01).date()}</td> */}
                                <td></td>
                                <td className='mt-2 text-[#222730]'>{userData[5]?.name}</td>
                                {/* <td>{Object?.values(userData[2]?.attendance['holiday'])}</td> */}
                            </tr>
                            <tr>
                                {/* <td>{userData[2]?.attendance ? .(2022 - 11 - 01).date()}</td> */}
                                <td></td>
                                <td className='mt-2 text-[#222730]'>{userData[8]?.name}</td>
                                {/* <td>{Object?.values(userData[2]?.attendance['holiday'])}</td> */}
                            </tr>
                            <tr>
                                {/* <td>{userData[2]?.attendance ? .(2022 - 11 - 01).date()}</td> */}
                                <td></td>
                                <td className='mt-2 text-[#222730]'>{userData[10]?.name}</td>
                                {/* <td>{Object?.values(userData[2]?.attendance['holiday'])}</td> */}
                            </tr>
                            <tr>
                                {/* <td>{userData[2]?.attendance ? .(2022 - 11 - 01).date()}</td> */}
                                <td></td>
                                <td className='mt-2 text-[#222730]'>{userData[11]?.name}</td>
                                {/* <td>{Object?.values(userData[2]?.attendance['holiday'])}</td> */}
                            </tr>


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Home;