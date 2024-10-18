const express = require('express');
const { savePlayers, getPlayers, updatePlayerStats } = require('../controllers/player');

const router = express.Router();

// Route to save player names
router.post('/players', savePlayers);

// Route to get all saved players
router.get('/players', getPlayers);

// Route to update player statistics
router.put('/players/stats', updatePlayerStats);

module.exports = router;
