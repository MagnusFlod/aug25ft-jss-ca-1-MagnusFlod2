## Meme Central - JSS Server-Side Backend-Application

## Description
Meme Central is a server-side implemented web application built with Node.js and Express. 
The application displays a list of memes from and external API. It allows logged-in users to view detailed information about each meme.

Guest users can browse the memes in the meme-central. They can also search for memes. But logged in users can also view the meme-details.


## Technologies Used
- Node.js
- Express.js
- EJS(Embedded JavaScript)
- Passport.js(Local strategy)
- Express-session
- Axios
- Bootstrap 5
- JavaScript(Both Frontend and Backend)


## External Libraries / Packages


Installed via NPM:

- express
- ejs
- passport-local
- express-session
- axios
- cockie parser
- morgan

Bootstrap is used locally


## Authentication

The application uses Passport.js with a local authentication strategy.
User credentials are stored in a local JSON file for testing purposes.
This application does not have a Sign-Up option.
You therefore need to use test-users if you want to log into this application.

## Test Users
User-names and passwords can be found inside the file: users.json. Path: aug25ft-jss-ca-1-MagnusFlod/users.json>

Test users:

- **Username:** Alice | **Password** Annie34
- **Username:** John | **Password** Zwanzig
- **Username:** Gandalf | **Password** MinasTirith

## Installation Instructions

1. Clone the repository
2. Navigate to the correct folder in the terminal using cd(change directory) to the priject folder
3. Install dependencies: npm install
4. Start the server by writing npm start
5. Open a browser and go to http://localhost:3000

## Application Features

* Meme overview page that displays 20 memes from an external API
* Search functionality
* Login system with guest and test users
* Meme details page. Only accessible from loggen in users
