import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../stylesheets/userview/usercreatedalbums.css";
import { Link } from "react-router-dom";

import { getAlbumByUserId } from "../../services/getPhotoData";

const UserCreatedAlbums = () => {
    const userId = useParams().userId;

    const [albums, setAlbums] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setPageNumber(1);
        setAlbums([])
    }, [userId]);

    const observer = useRef();
    const lastAlbumRef = useCallback(node => {
        if (loading) return;
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPageNumber(prev => prev + 1);
            };
        });
        if (node) observer.current.observe(node);
    }, [loading, hasMore]);

    useEffect(() => {
        setLoading(true);

        getAlbumByUserId(userId, pageNumber)
            .then(data => {
                if (data.length > 0) {
                    const tempArray = [...albums, ...data];
                    setAlbums([...new Set(tempArray.map(v => JSON.stringify(v)).map(v => JSON.parse(v)))]);
                };
                setHasMore(data.length > 0);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [pageNumber]); //eslint-disable-line

    return (
        <div className="user-created-albums">
            <h2>Created Albums</h2>
            {albums.map((album, idx) => {
                if (albums.length === idx +1) {
                    return <Link
                        to={`/album/${album.id}`}
                        ref={lastAlbumRef} 
                        key={`album-${album.id}-${album.title}-last`} 
                        className="album-info"
                    >
                        <b>Album {album.id}:</b> {album.title}
                    </Link>
                } else {
                    return <Link
                        to={`/album/${album.id}`}
                        key={`album-${album.id}-${album.title}-last`} 
                        className="album-info"
                    >
                        <b>Album {album.id}:</b> {album.title}
                    </Link>
                }
            })}
        </div>
    )
} 

export default UserCreatedAlbums;
