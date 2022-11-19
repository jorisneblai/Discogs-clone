import React, { useEffect, useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';
// import VinylIcon from '../../Icons/vinyl.svg';
import './Navbar.css';

const Navbar = (props) => {    
    return (
        <div className="navbar">
            <HomeOutlined className="navbar-icon-home"/>
        </div>
    )
}

export default Navbar;