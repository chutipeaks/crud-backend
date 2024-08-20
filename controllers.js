const { response } = require('express');
const user = require('./model');

const getUsers = (req, res, next) => {
    user.find()
        .then(response => {
            res.json(response); // Corrected here
        })
        .catch(err => {
            res.json({ err }); // Corrected here
        });
};

const addUsers = (req, res, next) => { 
    const newUser = new user({
        id: req.body.id,
        name: req.body.name
    });
    newUser.save()
        .then(response => {
            res.json(response); // Corrected here
        })
        .catch(err => {
            res.json({ err }); // Corrected here
        });
};

const updateUsers = (req, res, next) => {
    console.log("Request received with data:", req.body); // Add this line
    const { id, name } = req.body;
    user
        .updateOne({ id: id }, { $set: { name: name } })
        .then(response => {
            console.log("Update response:", response); // Add this line
            res.json(response);
        })
        .catch(err => {
            console.log("Error occurred:", err); // Add this line
            res.json({ err });
        });
};


const deleteUsers = (req, res, next) => {
    const id = req.body.id;
    user
        .deleteOne({ id: id })
        .then(response => {
            res.json(response); // Corrected here
        })
        .catch(err => {
            res.json({ err }); // Corrected here
        });
};

exports.getUsers = getUsers;
exports.addUsers = addUsers;
exports.updateUsers = updateUsers;
exports.deleteUsers = deleteUsers;
