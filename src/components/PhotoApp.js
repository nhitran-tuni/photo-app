import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch, Route
  } from "react-router-dom"

import NavBar from "./NavBar";
import Homepage from "./homepage/Homepage";
import AlbumView from "./albumview/AlbumView";
import SinglePhotoPage from "./SinglePhotoPage";
import AllPhotosView from "./allPhotosview/AllPhotosView";
import SearchView from "./searchview/SearchView";
import UserView from "./userview/UserView";

const PhotoApp = () => {
    const [query, setQuery] = useState("");

    return (
        <div className="photo-app">
            <Router>
                <NavBar query={query} setQuery={setQuery} />

                <Switch>
                    <Route path="/album/:albumId/photos/:photoId">
                        <SinglePhotoPage />
                    </Route>
                    <Route path="/album/:albumId">
                        <AlbumView />
                    </Route>
                    <Route path="/search">
                        <SearchView query={query} />
                    </Route>
                    <Route path="/all_photos">
                        <AllPhotosView />
                    </Route>
                    <Route path="/users/:userId">
                        <UserView />
                    </Route>
                    <Route path="/">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default PhotoApp
