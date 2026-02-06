const chatContainer = document.getElementById('chat-container');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const toggleBtn = document.getElementById('toggle-theme');
const app = document.getElementById('app');

function addMessage(text, sender = 'bot') {
  const msgDiv = document.createElement('div');
  msgDiv.classList.add('message', sender);
  msgDiv.textContent = text;
  chatContainer.appendChild(msgDiv);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

chatForm.addEventListener('submit', async e => {
  e.preventDefault();
  const userText = chatInput.value.trim();

  if (!userText) return;

  addMessage(userText, 'user');
  chatInput.value = '';

  // Call backend API for bot response
  try {
    const response = await fetch('http://localhost:5000/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userText })
    });
    const data = await response.json();
    addMessage(data.reply, 'bot');
  } catch (error) {
    addMessage("Oops! Something went wrong.", 'bot');
  }
});

// Dark mode toggle logic
toggleBtn.addEventListener('click', () => {
  if (app.classList.contains('light-mode')) {
    app.classList.remove('light-mode');
    app.classList.add('dark-mode');
    toggleBtn.textContent = '☀ Light Mode';
  } else {
    app.classList.remove('dark-mode');
    app.classList.add('light-mode');
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});
