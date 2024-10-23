const express = require('express');
const { getPlayers, saveGameResult } = require('../controllers/player');

const router = express.Router();



// Route to get all saved players
router.get('/players', getPlayers);

// Route to save the game with result
router.post('/players/results', saveGameResult);

module.exports = router;
