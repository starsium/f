
let friend = {};

document.getElementById('create-form').addEventListener('submit', (e) => {
  e.preventDefault();
  friend.name = document.getElementById('name').value;
  friend.age = document.getElementById('age').value;
  friend.personality = document.getElementById('personality').value;

  document.getElementById('create-form').classList.add('hidden');
  document.getElementById('chat-section').classList.remove('hidden');
  document.getElementById('friend-name').textContent = friend.name;
});

document.getElementById('chat-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('user-input');
  const message = input.value;
  input.value = '';

  addMessage('user', message);
  setTimeout(() => {
    const response = generateAIResponse(message);
    addMessage('friend', response);
  }, 600);
});

function addMessage(sender, text) {
  const chatBox = document.getElementById('chat-box');
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function generateAIResponse(msg) {
  const tone = {
    funny: ["Ахах, ти смішний! 😂", "Оце ти видав!", "Я в шоці 😆"],
    serious: ["Це важливо. Треба подумати.", "Хмм... цікава думка.", "Я тебе розумію."],
    romantic: ["Ти такий милий 💖", "Може, підем на уявне побачення?", "Твої слова — як музика 😍"],
    kind: ["Я завжди поруч ❤️", "Ти найкращий!", "Не сумуй, усе буде добре :)"]
  };
  const replies = tone[friend.personality] || ["Цікаво!", "Справді?", "Розкажи ще!"];
  return replies[Math.floor(Math.random() * replies.length)];
}
