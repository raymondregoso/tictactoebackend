const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  player1: {
    type: String,
    required: true,
  },
  player2: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  wins: {
    type: Number,
    default: 0,
  },
  losses: {
    type: Number,
    default: 0,
  },
  draws: {
    type: Number,
    default: 0,
  },
});

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
