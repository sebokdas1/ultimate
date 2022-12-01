import React from 'react';
import Logo from './logo.png'

const Navbar = () => {
    return (
        <div className='mt-[32px] flex justify-center lg:justify-start md:justify-start'>
            <img src={Logo} alt="" />
        </div>
    );
};

export default Navbar;