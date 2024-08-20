const express = require('express');
const app = express();
const cors = require('cors');

const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router');

app.use(cors());
app.use(express.json());

const uri ='mongodb+srv://tharusha1212:pvcvlogs@cluster0.x7t8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }   
};

connect();



const server = app.listen(port, host, () => {
    console.log(`Server running on port ${server.address().port}`);
});
app.use('/api', router);