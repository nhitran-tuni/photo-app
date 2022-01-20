# This is Photo Browser Application
Thuy Phuong Nhi Tran

#Demo
I have deployed a version to the Internet (with GitHub pages) so that you can use without installing anything.
We highly recommend to use the application on PCs and Laptops.  
You can also use the application on smart phones and tablets as well (Remember to use the application in landscape mode for better view :D ).  
The link to our application is https://nhitran-tuni.github.io/photo-app/#/

# Prerequisite
This section is related to running the applcation locally.  
The application requires NodeJS and a browser to operate. The latest version of Node can be found [here](https://nodejs.org/en/download/). Currently, Node version 14.x should be all good.
Minimal version requirements:
- NodeJS >= 11.0.0 (check: `node --version`)
- Chrome >= 69 or Firefox >= 62 or Edge >= 79

Now, let's install the required packages with this command in the root:
```
npm install
```
And start the application with:
```
npm start
```
# How to run
To run the application locally, from the main project folder, run this script from your terminal
```
npm run start-dev
```
A web page will be automatically opened on your main browser.

# Language and framework used:

The UI is developed using JavaScript. Below are the frameworks and libraries used in the project:
- ReactJS for building the UI in general
- axios for HTTP request
- react-icons for icons

# Folder structure:
Note that the below structure does not contain all files and folder. It contains only the most important directories. For example, styling files .css and .ignore files are not included.
(Updated: January 20th 2022)
```
├── photo-browser-app                
│   ├── public                                   --> contains metadata and root HTML where the app renders to
│   ├── src                                      --> source code folder
│   │   ├── components                           --> UI components folder
|   |   |    |--albumview                        --> UI components for single album page
|   |   |    |   |-AlbumView.js                  --> Main page for single albumview
|   |   |    |   |-SingleAlbumThumbnailView.js   --> Single thumbnail display component
|   |   |    |--allPhotosView                    --> UI components for all photo thumbnails display page
|   |   |    |   |-AllPhotosView.js              --> Main page for all photo thumbnails display
|   |   |    |--homepage                         --> UI components for homepage/ thumbnail display by album page
|   |   |    |   |-AlbumRow.js                   --> A row of thumbnail for one album
|   |   |    |   |-AlbumRows.js                  --> All album rows of thumbnail
|   |   |    |   |-Homepage.js                   --> Home page of the application
|   |   |    |--searchview                       --> UI components for search page
|   |   |    |   |-SearchView.js                 --> Main page for search view
|   |   |    |--userview                         --> UI components for user detail page
|   |   |    |   |-UserAvatar.js                 --> User banner for basic information display
|   |   |    |   |-UserBasicInfo.js              --> Section for displaying more detail of user
|   |   |    |   |-UserCreatedAlbum.js           --> Section for displaying all albums created by user
|   |   |    |   |-UserView.js                   --> Main page for user view
|   |   |    |-LoadingOrError.js                 --> Render when app is loading or faces errors
|   |   |    |-NavBar.js                         --> Navigation bar
|   |   |    |-PhotoApp.js                       --> Component render all application
|   |   |    |-PhotosView.js                     --> Component for displaying photo grid
|   |   |    |-SinglePhotoPage.js                --> Main page for single photo view
|   |   |--constant                              --> Constants folder
|   |   |    |-photoUrl.js                       --> Base Url
|   |   |--images                                --> Local images for UI
|   |   |--services                              --> HTTP request handlers
|   |   |    |-getAlbumDemoData.js               --> API function to get data for homepage
|   |   |    |-getPhotoData.js                   --> API function to get data for other views
|   |   |-photohooks                             --> Custom hooks for data query
|   |   |    |-useAllPhotoLoading.js             --> Custom hook for query data in all photos view page (lazy query)
|   |   |    |-usePhotoLoading.js                --> Custom hook for query data in all single album view page (lazy query)
|   |   |    |-usePhotoSearch.js                 --> Custom hook for query data when using search bar (only query when stop typing) view page (lazy query)
|   |   |-App.js                                 --> Main application file
|   |   |-index.js                               --> Entry file for the application
|   |--package.json                              --> Information about UI, including packages and scripts,...
```