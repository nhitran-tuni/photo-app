import axios from "axios";

import photoUrl from "../constants/photoUrl";

export const getPhotoData = (page, albumId) => {
    const request = axios
        .get(`${photoUrl}/photos`, {
            params: { _page: page, albumId: albumId, _limit: 30 }
        })
        .then(res => {
            return res && res.data;
        })
        .catch(err => console.log(err));
    
    return request;
};

export const getSinglePhoto = (albumId, photoId) => {
    const request = axios
        .get(`${photoUrl}/photos`, {
            params: { albumId: albumId, id: photoId }
        })
        .then(res => {
            return res && res.data;
        })
        .catch(err => console.log(err));
    
    return request;
};

export const getAlbumDetail = (albumId) => {
    const request = axios
        .get(`${photoUrl}/albums`, {
            params: { id: albumId }
        })
        .then(res => {
            return res && res.data;
        })
        .catch(err => console.log(err))

    return request;
};

export const getUserDetail = (userId) => {
    const request = axios
        .get(`${photoUrl}/users`, {
            params: { id: userId }
        })
        .then(res => {
            return res && res.data;
        })
        .catch(err => console.log(err))

    return request;
}

export const getAllPhotosData = (page) => {
    const request = axios
        .get(`${photoUrl}/photos`, {
            params: { _page: page, _limit: 30 }
        })
        .then(res => {
            return res && res.data;
        })
        .catch(err => console.log(err));

    return request;
}

export const getAlbumByUserId = (userId, page) =>  {
    const request = axios
        .get(`${photoUrl}/albums`, {
            params: { _page: page, userId: userId, _limit: 10 }
        })
        .then(res => {
            return res && res.data;
        })
        .catch(err => console.log(err));

    return request;
}
