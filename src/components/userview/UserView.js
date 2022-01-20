import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserDetail } from "../../services/getPhotoData";
import "../../stylesheets/userview/userview.css";

import UserAvatar from "./UserAvatar";
import UserBasicInfo from "./UserBasicInfo";
import UserCreatedAlbums from "./UserCreatedAlbums";

import { BiArrowBack } from "react-icons/bi";

const UserView = () => {
    const userId = useParams().userId;
    const history = useHistory();

    const [user, setUser] = useState({});

    useEffect(() => {
        getUserDetail(userId)
            .then(data => {
                if (data.length > 0) {
                    setUser(data[0])
                };
            })
            .catch(err => console.log(err));
    }, [userId]);

    if (Object.keys(user).length === 0) return null;

    return (
        <div className="user-view">
            <button className="back-btn" onClick={() => history.goBack()}>
                <BiArrowBack id="back-icon"/>
            </button>
            <div className="user-info">
                <UserAvatar user={user}/>
                <UserBasicInfo user={user} />
                <UserCreatedAlbums />
            </div>
        </div>
    );
};

export default UserView
