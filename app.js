const mysql2 = require('mysql2');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: '12777561005663sS$'
});

//Generating 500 fake emails
// const emails = [];
// for (let i = 0; i < 500; i++) {
//     emails.push([
//             faker.internet.email(),
//             faker.date.past()
//         ]
//     );
// }

app.get("/", function (request, response) {
    const q = 'SELECT COUNT(*) AS count FROM users';
    connection.query(q, function (err, results) {
        if (err) throw err;
        const count = results[0].count;
        response.render("home", {count: count},);
    });
});

app.post("/register", function (request, response) {

    const q = "INSERT INTO users (email) VALUES ('" + request.body.email + "')";
    connection.query(q, function (err, results) {
        if (err) throw err;
        response.sendFile("C:\\Users\\Admin\\WebstormProjects\\sql_app\\views\\register.html");
    });
});

app.listen(8080, function () {
    console.log("Server is running")
});
