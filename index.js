// Dependencies and Modules
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const player = require('./routes/player');

// Environment setup
const port = 4000;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', player);

// Database connection
mongoose.connect("mongodb+srv://raymondregoso:admin123@cluster0.tzc7fco.mongodb.net/tic-tac-toe?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log("Now connected to MongoDB Atlas."));

// Server Gateway Response
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API is now online on port ${port}`);
  });
}

module.exports = { app, mongoose };