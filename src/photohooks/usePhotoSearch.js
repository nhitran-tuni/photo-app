import axios from "axios";
import { useEffect, useState } from "react";
import photoUrl from "../constants/photoUrl";

const usePhotoSearch = (pageNumber, albumId, query) => {
    const [photos, setPhotos] = useState([]);

    const [loading, setLoading]= useState(true);
    const [error, setError] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setPhotos([])
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        
        let cancel
        axios
            .get(`${photoUrl}/photos`, {
                params: { q: query, _page: pageNumber, _limit: 30 },
                cancelToken: new axios.CancelToken(c => cancel = c)
            })
            .then(res => {
                if (res && res.data.length > 0) {
                    const tempArray = [...photos, ...res.data];
                    setPhotos([...new Set(tempArray.map(v => JSON.stringify(v)).map(v => JSON.parse(v)))]);
                };
                setHasMore(res.data.length > 0);
                setLoading(false);
            })
            .catch(err => {
                if (axios.isCancel(err)) return;
                console.log(err);
                setError(true);
            });
        return () => cancel()
    }, [query, pageNumber]); //eslint-disable-line

    return { photos, loading, error, hasMore };

};

export default usePhotoSearch
