import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ boxShadow: '0 8px 16px #0a0a0a1a' }} className="navbar navbar-expand-lg p-3">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">Shafayet Muttaky Durjoy</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto text-center">
                        <NavLink
                            onClick={() => { window.scrollTo(0, 0); }}
                            style={({ isActive }) => ({
                                color: isActive ? '#dc3545' : '#000',
                                fontWeight:isActive && '700'
                            })} className="nav-link" to="/">Home</NavLink>
                        <NavLink
                            onClick={() => { window.scrollTo(0, 0); }}
                            style={({ isActive }) => ({
                                color: isActive ? '#dc3545' : '#000',
                                fontWeight:isActive && '700'
                            })} className="nav-link" to="/projects">Undergraduate Portfolio</NavLink>
                        <NavLink
                            onClick={() => { window.scrollTo(0, 0); }}
                            style={({ isActive }) => ({
                                color: isActive ? '#dc3545' : '#000',
                                fontWeight:isActive && '700'
                            })} className="nav-link" to="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;