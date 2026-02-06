// backend/routes/chatbot.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  // Simple bot logic - you can expand or replace with AI integration
  let reply = "Hello! I'm InfinoAI. You said: " + message;

  if (message.toLowerCase().includes('dark mode')) {
    reply = "Dark mode is enabled! Enjoy the new look.";
  } else if (message.toLowerCase().includes('hello') || message.toLowerCase().includes('hi')) {
    reply = "Hello! How can I assist you today?";
  } else if (message.toLowerCase().includes('help')) {
    reply = "I can assist you with your queries. Type your questions!";
  }

  res.json({ reply });
});

module.exports = router;
