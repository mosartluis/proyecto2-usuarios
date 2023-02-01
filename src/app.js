const express = require("express");
const app = express();

app.use(express.json());

let baseID = 0;

const usersDB = [
    {
        id: baseID++,
        firstName: 'Sahid',
        lastName: 'Kick',
        email: 'sahid.kick@academlo.com',
        password: 'root',
        age: 22
    }
];

// CREATE USERS
app.post("/users", (req, res) => {
    const formatUser = {
        id: baseID++,
        firstName: req.body?.firstName,
        lastName: req.body?.lastName,
        email: req.body?.email,
        password: req.body?.password,
        age: req.body?.age
    };
    usersDB.push(formatUser);
    res.status(201).send(formatUser);
});


// VIEW USERS
app.get("/users", (req, res) => {
    res.status(200).send(usersDB)
});

//? VIEW USERS BY ID
app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const selectedUsers = usersDB.find(user => user.id == id);
    res.status(200).send(selectedUsers)
});

app.listen(9000, () => {
    console.log('Server is run');
});

module.exports = app;
