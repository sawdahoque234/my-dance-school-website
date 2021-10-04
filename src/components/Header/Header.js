import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    
    return (
        <div>
            {/* navbar */}
            <Nav className=" conatiner p-3 mb-3 bg-dark  rounded-3" >
                <NavLink  className="mx-3 text-white text-decoration-none fw-bolder fst-italic fs-2" to="">DANCE STUDIO</NavLink>
                <div className="mx-auto d-block">
                <NavLink  className="text-white text-decoration-none mx-3 fs-5 fw-bold"  to="/home">Home</NavLink>
                <NavLink  className="text-white text-decoration-none mx-3 fs-5 fw-bold" to="/about">About</NavLink>
                <NavLink  className="text-white text-decoration-none mx-3 fs-5 fw-bold" to="/service">Services</NavLink>
                <NavLink  className="text-white text-decoration-none mx-4 fs-5 fw-bold" to="/contact">Contact</NavLink>
                </div>
           </Nav>
        </div>
    );
};

export default Header;