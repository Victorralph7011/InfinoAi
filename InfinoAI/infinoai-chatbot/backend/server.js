const express = require('express');
const cors = require('cors');
const chatbotRoute = require('./routes/chatbot');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/chatbot', chatbotRoute);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend server is running on http://localhost:${PORT}`);
});
