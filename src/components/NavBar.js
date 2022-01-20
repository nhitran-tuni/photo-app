import React from "react";
import logo from '../images/logo.png'
import "../stylesheets/navbar.css"

import { Link, useHistory, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const NavBar = ({ query, setQuery }) => {
    const history = useHistory();
    const location = useLocation()

    const onQuerySubmit = e => {
        e.preventDefault();

        const target = e.target;
        if (target && target.value && target.value.length > 0) {
            if (location.pathname !== "/search") {
                history.push("/search");
            };
        };
        setQuery(target.value)
    };

    return (
        <div className="navbar">
            <Link to="/">
                <img
                    className="app-logo"
                    src={logo}
                    alt="app-logo"
                />
            </Link>
            <Link to="/" className="link-navbar"><h2>Home</h2></Link>
            <Link to="/all_photos" className="link-navbar"><h2>Photos</h2></Link>
            <div className="search-input">
                <input placeholder="Search photo..." value={query} type="text" onChange={onQuerySubmit}/>
                <button type="submit" disabled>
                    <BsSearch />
                </button>
            </div>
        </div>
    );
};

export default NavBar
