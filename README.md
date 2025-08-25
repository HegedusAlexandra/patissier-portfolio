# GH pages deployment

github pages deploy needs special settings to work.
The main one is to set the lonk to the website in the homepage field in the package.json file.
Also, since the website is hosted under a /my-site path, need the REACT_APP_BASENAME environment variable to be set accordingly.
This is done in the .env.production

# Local Development

the changes to the homepage field in the package.json file causes node to open http://localhost:300/ptissier-portfolio in the browser, which will cause a 404 error.
Just delete the patissier-portfolio/ suffix and connect to http://localhost:3000 instead and the website will be working.
For local development, .env file is loaded, which contains and empty REACT_APP_BASENAME and an empty REACT_APP_ROUTING_PREFIX.

# Environment variables

REACT_APP_BASENAME is used if the website is not hosted in the root of the url (like on githubpages, where should contain the path to the project site, like /patissier-portfolio/). Since on local development the site is served in the root of localhost this variable need to be empty.

REACT_APP_ROUTING_PREFIX is used because the goToScreen function behaves differently whether we are on an empty REACT_APP_BASENAME case (local development) or with a non-empty REACT_APP_BASENAME (github pages).
in the local development case the variable should be left empty (and to go to the homepage goToScreen("") should be called), while in the github pages should be set to / (and to go to the homepage goToScreen("/") should be called).
Due to that actually the code is written in the following way: goToScreen(process.env.REACT_APP_ROUTING_PREFIX+""), in order to have a unified stile working on both environments