import React from "react";
import "../../stylesheets/albumview/singlephotothumbnail.css";

import { Link } from "react-router-dom";
import { MdOpenInNew } from "react-icons/md";

const SinglePhotoThumbnailView = ({ photo }) => {

    return (
        <>
            <div className="single-photo">
                <img
                    className="album-display-photo"
                    src={photo.thumbnailUrl} 
                    alt={photo.title}
                />
            </div>
            <Link to={`/album/${photo.albumId}/photos/${photo.id}`}>
                <div className="photo-overlay">
                    <button
                        href={photo.url}
                        onClick={() => window.open(photo.url, "_blank")}
                        id="redirect-btn" 
                    >
                        <MdOpenInNew id="redirect-icon"/>
                    </button>
                </div>
            </Link>
        </>
    )
}

export default SinglePhotoThumbnailView
