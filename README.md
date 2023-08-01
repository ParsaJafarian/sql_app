# sql_app
This is my little project that is designed with the goal of reassessing my knowledge in MySql and back-end web development.

## Description
This app is a simple sign up page for a newsletter that asks for an email on the home page. The email is then stored in a MySql database. The user is then redirected to a page that displays the email that they entered. The user can then go back to the home page and enter another email. Error handling is done with redirection and flash messages. 

## How to run
1. Clone the repository
2. Go to the MySql shell
3. Run `SOURCE <path to createDB.sql>` to create the database
4. Run `SOURCE <path to users.sql>` to create the table
5. Run `npm install` to install all the dependencies
6. Run `npm start` to start the server
7. Go to `localhost:3000` to view the app

## What I learned
- How to use MySQL
- How to use Express.js
- How to use Node.js
- How to use Nodemon
- How to use EJS
- How to use Body-Parser
- How to use Express-Session and Connect-Flash

## Next steps
- A login page
- A logout page
- A page that displays all the emails in the database
- Passport.js for authentication
- A page that allows the user to change their profile information
- Cleaning up the styelsheets
- Improving the error messages and error handling