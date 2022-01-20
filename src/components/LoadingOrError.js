import React from "react";
import "../stylesheets/loadingorerror.css";

import { AiOutlineLoading } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";

const LoadingOrError = ({ loading = false, error }) => {

    if (error) {
        return(
            <div className="loading-error-container">
                <BiErrorCircle id="error-icon" />
                <p id="loading-error-text">Something goes wrong, please reload the page!</p>
            </div>
        )
    };

    if (loading) {
        return (
            <div className="loading-error-container">
                <AiOutlineLoading id="loading-icon" />
                <p id="loading-error-text">If it takes too long, please reload the page!</p>
            </div>
        );
    };

    return null;
}

export default LoadingOrError
