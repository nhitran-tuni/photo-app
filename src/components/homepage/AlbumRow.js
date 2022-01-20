import React from "react";

import "../../stylesheets/homepage/albumRow.css"

import { Link } from "react-router-dom";

const AlbumRow = ({ albumId, photos }) => {
    return(
        <div className="photo-row-wrapper">
            <Link className="album-link" to={`/album/${albumId}`}>
                <h2 className="album-title">{`ALBUM ${albumId}`}</h2>
            </Link>
            <div className="row__photos">
                {photos.map(photo => (
                    <Link
                        key={`album-${photo.albumId}-${photo.id}`}
                        className="row__photo" 
                        to={`/album/${photo.albumId}/photos/${photo.id}`}
                    >
                        <img
                            src={photo.thumbnailUrl} 
                            alt={photo.title}
                        />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AlbumRow
