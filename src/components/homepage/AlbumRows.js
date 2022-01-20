import React, { useCallback, useEffect, useRef, useState } from "react";

import AlbumRow from "./AlbumRow";

import getAlbumDemoData from "../../services/getAlbumDemoData";

import "../../stylesheets/homepage/albumRows.css"

const AlbumRows = () => {
    //Just display some demo photo in a album
    const PAGE = 1;
    const [albumIds, setAlbumIds] = useState([1]);
    const [albumPhotos, setAlbumPhotos] = useState({});
    const [hasMoreAlbum, setHasMoreAlbum] = useState(true);
    const [loading, setLoading] = useState(true);

    const observer = useRef();
    const lastAlbumRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMoreAlbum) {
                setAlbumIds([...albumIds, albumIds.slice(-1)[0] + 1])
            };
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMoreAlbum]); //eslint-disable-line

    useEffect(() => {
        setLoading(true);
        const albumID = albumIds.slice(-1)[0];
        const hasAlbum = Object.keys(albumPhotos).includes(albumID)

        getAlbumDemoData(PAGE, albumID)
            .then(data => {
                if (data.length === 0 || hasAlbum || !albumID) {
                    setHasMoreAlbum(false);
                    setAlbumIds(albumIds.slice(0, -1));
                } else {
                    if (!hasAlbum) {
                        const tempAlbumPhotos = {...albumPhotos}
                        tempAlbumPhotos[`${albumID}`] = data;
                        setAlbumPhotos(tempAlbumPhotos);
                    };
                };
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [albumIds]); //eslint-disable-line
    
    return (
        <div className="album-rows-container">
            {Object.keys(albumPhotos).map((albumId, idx) => {
                if (albumIds.length === idx + 1) {
                    return (
                        <div key={`last-album-${albumId}-wrapper`} className="last-album" ref={lastAlbumRef}>
                            <AlbumRow
                                key={`album-${albumId}`}
                                albumId={albumId}
                                photos={albumPhotos[albumId]}
                            />
                        </div>
                    );
                } else {
                    return (
                        <div key={`album-${albumId}-wrapper`} className="album">
                            <AlbumRow
                                key={`album-${albumId}`}
                                albumId={albumId}
                                photos={albumPhotos[albumId]}s
                            />
                        </div>
                    )
                };
            })}
        </div>
    );
};

export default AlbumRows
