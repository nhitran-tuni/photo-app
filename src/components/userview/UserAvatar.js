import React from "react";
import "../../stylesheets/userview/useravatar.css";

import { FiUser } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const UserAvatar = ({ user }) => {
    return (
        <div className="user-ava">
            <div className="ava-icon-container">
                <FiUser id="ava-icon" />
            </div>
            <div className="user-name-container">
                <h1>{user.username}</h1>
                <div className="basic-info"><FaRegUserCircle /> <h4>{user.name}</h4></div>
                <div className="basic-info"><MdAlternateEmail /> <h4>{user.email}</h4></div>
            </div>
        </div>
    )
};

export default UserAvatar
