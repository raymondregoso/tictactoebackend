const Player = require('../models/Player');

// Save players
const savePlayers = async (req, res) => {
  const { player1, player2 } = req.body;

  if (!player1 || !player2) {
    return res.status(400).json({ message: 'Both player names are required.' });
  }

  try {
    const newPlayer = new Player({ player1, player2 });
    await newPlayer.save();
    res.status(201).json({ message: 'Players saved successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save player names.', error });
  }
};

// Get all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve players.', error });
  }
};

// Update player statistics
const updatePlayerStats = async (req, res) => {
  const { player1, player2, result } = req.body;

  try {
    
    let player = await Player.findOne({ player1, player2 });

    if (!player) {
      return res.status(404).json({ message: 'Player record not found.' });
    }

    // Update the player statistics 
    if (result === 'win') {
      player.wins += 1; 
    } else if (result === 'lose') {
      player.losses += 1; 
    } else if (result === 'draw') {
      player.draws += 1; 
    } else {
      return res.status(400).json({ message: 'Invalid result value.' });
    }

    // Save the updated player record
    await player.save();
    res.status(200).json({ message: 'Player stats updated successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to update player stats.', error });
  }
};

module.exports = { savePlayers, getPlayers, updatePlayerStats };
