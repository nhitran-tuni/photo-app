import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "../../stylesheets/albumview/albumview.css";

import LoadingOrError from "../LoadingOrError";
import PhotosView from "../PhotosView";
import usePhotoLoading from "../../photohooks/usePhotoLoading";

import { getAlbumDetail } from "../../services/getPhotoData";
import { BiPhotoAlbum, BiArrowBack } from "react-icons/bi";

const AlbumView = () => {
    const albumId = useParams().albumId;
    const history = useHistory();

    const [album, setAlbum] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getAlbumDetail(albumId)
            .then(data => {
                if (data.length > 0) {
                    setAlbum(data[0])
                }
            })
            .catch(err => {
                console.log(err);
                setError(true);
            })
    }, [albumId]);

    if (error) return <LoadingOrError error={error} />

    return(
        <div className="album-view">
            <button className="back-btn" onClick={() => history.goBack()}>
                <BiArrowBack id="back-icon"/>
            </button>
            <div className="albumview-album-title">
                <BiPhotoAlbum id="albumview-album-icon"/>
                <h1 className="text">{album.title}</h1>
            </div>
            <PhotosView usePhotoSearch={usePhotoLoading} albumId={albumId} />
        </div>  
    )
}

export default AlbumView