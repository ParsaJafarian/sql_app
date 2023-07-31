const faker = require('faker');
const db = require('./config/db');

//seeds.js is a file that is used to populate the database with fake data.

const generateFakeEmails = () => {
    const emails = [];
    for (let i = 0; i < 500; i++) {
        emails.push([
            faker.internet.email(),
            faker.date.past()
        ]
        );
    }
    return emails;
}
const seedEmails = () => {
    const emails = generateFakeEmails();
    const q = 'INSERT INTO users (email, created_at) VALUES ?';
    db.query(q, [emails])
        .then(() => {
            console.log("Emails inserted");
        }).catch((err) => {
            console.log(err);
        });
}

seedEmails();

