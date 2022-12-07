import React from 'react';
// import { HomeOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons';
import './Navbar.scss';

const VinylSvg = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" fill="currentColor" className="bi bi-vinyl" viewBox="0 0 16 16">
         <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
         <path d="M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM4 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"/>
         <path d="M9 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
    </svg>
);
const VinylIcon = (props) => <Icon component={VinylSvg} />;

const Navbar = (props) => {    
    return (
        <div className="navbar">
            <button className="navbar-vinyl-btn">
                <VinylIcon
                    style={{
                        fontSize: '16px',
                        color: 'red',
                    }}
                />
            </button>
        </div>
    )
}

export default Navbar;
               
            