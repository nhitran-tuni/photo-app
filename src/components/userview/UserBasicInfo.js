import React from "react";
import "../../stylesheets/userview/userbasicinfo.css";

import { BsTelephoneFill, BsFillHouseFill } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { MdWork } from "react-icons/md";

const UserBasicInfo = ({ user }) => {
    return (
        <div className="user-basic-info">
            <h2>Intro</h2>
            <div className="basic-info-container">
                <p className="info">
                    <BsTelephoneFill id="basic-info-icon" />
                    <span>{user.phone}</span>
                </p>
                <p className="info">
                    <CgWebsite id="basic-info-icon" />
                    <span>
                        <a href={user.website} target="_blank" rel="noreferrer">
                            {user.website}
                        </a>
                    </span>
                </p>
                <p className="info">
                    <BsFillHouseFill id="basic-info-icon" />
                    <span>
                        {user.address.suite || ""}, {user.address.street|| ""}
                        <br/>
                        {user.address.zipcode || ""}, {user.address.city || ""}
                    </span>
                </p>
                <p className="info">
                    <MdWork id="basic-info-icon" />
                    <span>{user.company.name}</span>
                </p>
            </div>
        </div>
    )
}

export default UserBasicInfo
