import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Photo from '../../Images/photo.png';

const Login = () => {
    const [userData, setUserData] = useState([])
    const navigate = useNavigate()

    const submitData = () => {
        // console.log(userData)
        fetch(' https://test.nexisltd.com/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.access_token) {
                    localStorage.setItem('accessToken', data?.access_token)
                    navigate('/')
                }
            });
    }
    return (
        <div className='lg:flex md:flex justify-evenly'>
            <div>
                <img className='w-[100%]' src={Photo} alt="" />
            </div>
            <div className='shadow-lg h-[90vh] pl-10 lg:pl-32 lg:pr-8'>
                <h2 className='signhead text-center'>Log in Form</h2>
                <div className='mt-[100px]'>
                    <input type="email" placeholder='Write Email Address' name='email' value={userData["email"]} onChange={(e) => setUserData({ ...userData, "email": e.target.value })} />

                    <input className='mt-[54px]' type="password" placeholder='Write Password' name='password' value={userData["password"]} onChange={(e) => setUserData({ ...userData, "password": e.target.value })} />
                    <h6><small className={userData?.password?.length < 8 ? "text-red-600" : "text-[#7E7E7E] "} >Your Password must be 8 character</small></h6>

                    <div className='mt-[64px] flex justify-center'>
                        <button disabled={userData?.password?.length < 8 || userData?.email === ""} onClick={submitData} className='flex items-center gap-4 bg-[#1678CB] nextbtn py-[15px] px-[28px]'>Log In</button>
                    </div>
                </div>

                <h4 className='mt-12 lg:mt-24'><span className='text-[#7E7E7E]'>Don't have an account?</span> <Link to="/signup" className='uppercase text-[#1678CB] underline'>SignUp Here</Link></h4>
            </div>

        </div>
    );
};

export default Login;