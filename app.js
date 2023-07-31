const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./config/db');
const dotenv = require('dotenv');
const flash = require('express-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
dotenv.config();

app.use(express.static(__dirname + "/public"));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(flash());
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (request, response) => {
    try {
        const q = 'SELECT COUNT(*) AS count FROM users';
        const results = await db.query(q);
        const count = results[0].count;
        response.render("home", { count: count, messages: request.flash('error')});
    } catch (e) {
        request.flash('error', e.message);
        response.redirect('/');
    }
});

app.post("/register", async (request, response) => {
    try {
        const q = "INSERT INTO users (email) VALUES ('" + request.body.email + "')";
        await db.query(q);
        response.render("register");
    } catch (e) {
        request.flash('error', e.message);
        response.redirect('/');
    }
});

app.listen(process.env.PORT, () => {
    console.log("Server is running")
});
