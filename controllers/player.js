const Player = require('../models/Player');


// Get all players
const getPlayers = async (req, res) => {
  try {
    const players = await Player.find();
    res.status(200).json(players);
  } catch (error) {
    console.error('Error retrieving players:', error);
    res.status(500).json({ message: 'Failed to retrieve players.', error });
  }
};

// Save game result
const saveGameResult = async (req, res) => {
  const { player1, player2, wins, losses, draws } = req.body;

  if (!player1 || !player2 || wins === undefined || losses === undefined || draws === undefined) {
    return res.status(400).json({ message: 'Player names and results are required.' });
  }

  try {
    const newRecord = new Player({
      player1,
      player2,
      wins,
      losses,
      draws,
      date: new Date(),
    });

    await newRecord.save();
    res.status(201).json({ message: 'Game result saved successfully!' });
  } catch (error) {
    console.error('Error saving game result:', error);
    res.status(500).json({ message: 'Failed to save game result', error });
  }
};



module.exports = { getPlayers, saveGameResult };
