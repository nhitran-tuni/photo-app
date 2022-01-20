import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";

import "../stylesheets/singlePhotoPage.css";

import { 
    getSinglePhoto,
    getAlbumDetail,
    getUserDetail,
} from "../services/getPhotoData";

import {
    BiUser,
    BiPhotoAlbum,
    BiArrowBack
} from "react-icons/bi";

import LoadingOrError from "./LoadingOrError";
import PhotosView from "./PhotosView";
import usePhotoLoading from "../photohooks/usePhotoLoading";

const SinglePhotoPage = () => {
    const albumId = useParams().albumId;
    const photoId = useParams().photoId;
    const history = useHistory();

    const [photo, setPhoto] = useState({});
    const [album, setAlbum] = useState({});
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        getSinglePhoto(albumId, photoId)
            .then(data => {
                if (data.length > 0) {
                    setPhoto(data[0])

                    getAlbumDetail(data[0].albumId)
                        .then(albumData => {
                            if (albumData.length > 0) {
                                setAlbum(albumData[0])

                                getUserDetail(albumData[0].userId)
                                    .then(userData => {
                                        if (userData.length > 0) {
                                            setUser(userData[0]);
                                        };
                                    })
                                    .catch(err => {
                                        console.log(err);
                                        setError(true);
                                    });
                            };
                        })
                        .catch(err => {
                            console.log(err);
                            setError(true);
                        });
                };
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });
    }, [photoId, albumId]); //eslint-disable-line

    if (loading || error) {
        return <LoadingOrError loading={loading} error={error} />
    };

    if (Object.keys(photo).length === 0) {
        return (
            <div className="loading-error-text">Nothing to show!</div>
        );
    };

    return (
        <div className="single-photo-page">
            <button className="back-btn" onClick={() => history.goBack()}>
                <BiArrowBack id="back-icon"/>
            </button>
            <div className="single-photo-display" >
                <img src={photo.url} alt={photo.title} />
                <div className="photo-detail">
                    <h2 className="text" id="photo-title">{photo.title}</h2>
                    <Link to={`/album/${albumId}`} id="link-album">
                        <div id="photo-album">
                            <BiPhotoAlbum id="album-icon" />
                            <h3 className="text">Album {albumId}: {album.title}</h3>
                        </div>
                    </Link>
                    <div className="user-banner">
                        <BiUser className="user-icon" />
                        {Object.keys(user).length > 0 &&
                            <Link to={`/users/${user.id}`} className="link-to-user-page">
                                <h3 className="user-name">{user.username}</h3>
                            </Link>
                        }
                    </div>
                </div>
            </div>
            <div className="more-photos">
                <h3 className="text" id="more-photos">More in this album</h3>
                <PhotosView usePhotoSearch={usePhotoLoading} albumId={albumId} />
            </div>
        </div>
    );
};

export default SinglePhotoPage
