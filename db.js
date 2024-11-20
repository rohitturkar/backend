const mongoose = require('mongoose');

// mongoose works like a bridge between Node.js server and MongoDB server

// Define the MongoDB Connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';


mongoose.connect(mongoURL);


const db = mongoose.connection;


db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
