import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="container-fluid">
                {/* Logo / Brand */}
                <a className="navbar-brand fw-bold" href="/">RentEase</a>

                {/* Main Navigation Links */}
                <div className="d-flex">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/properties">Browse Properties</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/list-property">List Your Property</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Right Side Links */}
                <div className="d-flex">
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/saved">Saved (4)</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/bookings">My Bookings</a>
                        </li>
                        <li className="nav-item px-2">
                            <a className="nav-link" href="/profile">Profile</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
