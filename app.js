const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controllers');  // Correctly importing the controllers module

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers(req, res);
});

app.post('/createuser', (req, res) => {
    const id = req.body.id; 
    controller.addUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.put('/updateuser', (req, res) => {
    const id = req.body.id; 
    controller.updateUser(req.body, (callback) => {
        res.send(callback);
    });
});

app.delete('/deleteuser', (req, res) => {
    const id = req.body.id; 
    controller.deleteUser(req.body, (callback) => {
        res.send(callback);
    });
});

module.exports = app;