import React from "react";
import { useHistory } from "react-router-dom";
import "../../stylesheets/searchview/searchview.css"

import usePhotoSearch from "../../photohooks/usePhotoSearch";

import PhotosView from "../PhotosView";

import { BiArrowBack } from "react-icons/bi";

const SearchView = ({ query }) => {
    const history = useHistory();

    return (
        <div className="search-view">
            <button className="back-btn" onClick={() => history.goBack()}>
                <BiArrowBack id="back-icon"/>
            </button>
            <h2 className="text">Result for "{query}"</h2>
            <PhotosView usePhotoSearch={usePhotoSearch} albumId={1} query={query} />
        </div>
    );
};

export default SearchView
