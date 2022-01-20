import { useEffect, useState } from "react";
import { getPhotoData } from "../services/getPhotoData";

const usePhotoLoading = (pageNumber, albumId, query) => {
    const [photos, setPhotos] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setPhotos([]);
    }, [albumId]);

    useEffect(() => {
        setLoading(true);
        setError(false);

        getPhotoData(pageNumber, albumId)
            .then(data =>{
                if (data.length > 0) {
                    const tempArray = [...photos, ...data];
                    setPhotos([...new Set(tempArray.map(v => JSON.stringify(v)).map(v => JSON.parse(v)))]);
                };
                setHasMore(data.length > 0);
                setLoading(false);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            })
    }, [pageNumber, albumId]);//eslint-disable-line

    return { photos, loading, error, hasMore }

} 

export default usePhotoLoading
