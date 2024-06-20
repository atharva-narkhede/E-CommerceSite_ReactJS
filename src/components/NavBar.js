import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingCart } from 'react-icons/md';
import { CiLogout } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";

const Navbar = ({ isAuthenticated, handleLogout, cartItemCount }) => {
    const navStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        margin: '0 10px'
    };

    const iconStyle = {
        fontSize: '24px',
        color: '#fff',
        margin: '0 10px',
        position: 'relative'
    };

    const cartCountStyle = {
        position: 'absolute',
        top: '-10px',
        right: '-10px',
        backgroundColor: 'red',
        color: '#fff',
        borderRadius: '50%',
        padding: '2px 6px',
        fontSize: '12px'
    };

    const buttonStyle = {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0',
        margin: '0 10px'
    };

    const navLeftStyle = {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    };

    const navRightStyle = {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    };

    const menuToggleStyle = {
        display: 'none',
        fontSize: '24px',
        cursor: 'pointer'
    };

    return (
        <nav style={navStyle}>
            <div style={navLeftStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About Us</Link>
                <Link to="/contact" style={linkStyle}>Contact Us</Link>
                {isAuthenticated && <Link to="/products" style={linkStyle}>Products</Link>}
            </div>
            <div style={navRightStyle}>
                {isAuthenticated ? (
                    <>
                        <Link to="/cart" style={iconStyle}>
                            <MdShoppingCart />
                            {cartItemCount > 0 && <span style={cartCountStyle}>{cartItemCount}</span>}
                        </Link>
                        <button onClick={handleLogout} style={buttonStyle}>
                            <CiLogout style={iconStyle} />
                        </button>
                    </>
                ) : (
                    <Link to="/login" style={iconStyle}>
                        <FiLogIn />
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
