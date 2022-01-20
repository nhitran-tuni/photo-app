import axios from "axios";

import photoUrl from "../constants/photoUrl";

const getAlbumDemoData = (page, albumId) => {
    const request = axios
        .get(`${photoUrl}/photos`, {
            params: { _page: page, albumId: albumId, _limit: 15 }
        })
        .then(res => {
            return res.data
        })
        .catch(err => console.log(err));
    
    return request
};

export default getAlbumDemoData
