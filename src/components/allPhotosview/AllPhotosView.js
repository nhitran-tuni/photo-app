import React from "react";
import "../../stylesheets/allphotosview/allphotosview.css";
import { useHistory } from "react-router-dom";

import PhotosView from "../PhotosView";
import useAllPhotoLoading from "../../photohooks/useAllPhotoLoading";

import { BiArrowBack } from "react-icons/bi";


const AllPhotosView = () => {
    const history = useHistory();
    return (
        <div className="all-photos-view">
            <button className="back-btn" onClick={() => history.goBack()}>
                <BiArrowBack id="back-icon"/>
            </button>
            <PhotosView usePhotoSearch={useAllPhotoLoading} />
        </div>
    );
};

export default AllPhotosView
