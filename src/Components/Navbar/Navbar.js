import React, { useEffect, useState } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import './Navbar.css';

const Navbar = (props) => {    
    return (
        <div className="navbar">
            <button className="navbar-button">
                <HomeOutlined className="navbar-icon-home" />
            </button>
        </div>
    )
}

export default Navbar;