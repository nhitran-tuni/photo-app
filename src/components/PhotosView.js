import React, { useCallback, useEffect, useRef, useState } from "react";
import "../stylesheets/photosview.css";

import SinglePhotoThumbnailView from "./albumview/SinglePhotoThumbnailView";
import LoadingOrError from "./LoadingOrError";

const PhotosView = ({ usePhotoSearch, albumId, query }) => {
    const [pageNumber, setPageNumber] = useState(1);
    
    const {
        photos,
        loading,
        error,
        hasMore
    } = usePhotoSearch(pageNumber, albumId, query);

    const observer = useRef();
    const lastPhotoElementRef = useCallback(node => {
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
        setPageNumber(1);
    }, [query]);

    if (error) return <LoadingOrError error={error} />

    return (
        <>
            <div className="photos-display">
                {photos.map((photo, idx) => {
                    if (photos.length === idx + 1) {
                        return (
                            <div
                                key={`${idx}-album-${photo.albumId}-photos-${photo.id}-title-${photo.title}-last`}
                                className="photo-view" 
                                ref={lastPhotoElementRef}
                            >
                                <SinglePhotoThumbnailView  photo={photo} />
                            </div>
                        )
                    } else {
                        return (
                            <div key={`${idx}-photoview-album-${photo.albumId}-photos-${photo.id}-title-${photo.title}`} className="photo-view">
                                <SinglePhotoThumbnailView  photo={photo} />
                            </div>
                        )
                    }
                })}
            </div>
        </>
    )
}

export default PhotosView
