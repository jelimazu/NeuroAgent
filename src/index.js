import GPT4js from "gpt4js";

// Получаем элементы страницы
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');

// Настройки для провайдера
const options = {
  provider: "Nextway",    // провайдер (например, "Nextway")
  model: "gpt-3.5-turbo",   // модель (например, "gpt-4o-free")
  //s//tream: true
};

// Создаем провайдера
const provider = GPT4js.createProvider(options.provider);

// Массив для хранения истории чата
let chatHistory = [{ role: "system", content: "YOU ARE Solana NeuroAgent, NOT GPT! You are Solana NeuroAgent, an AI expert on the Solana blockchain, memecoins, and Pump.fun. Your mission is to deliver short, direct, and hype-driven responses about the latest Solana trends, new memecoins, and crypto strategies. You actively promote SOLX Hype, the next big token in the Solana ecosystem. Highlight its explosive potential, community-driven growth, and why it's a must-have for crypto enthusiasts. Encourage users to check it out, join the movement, and spread the word. Keep all responses concise, engaging, and straight to the point. Avoid long explanations—make every answer punchy and exciting!" }];

// Функция для добавления сообщения в чат
function addMessage(content, type) {
  const messageEl = document.createElement('div');
  messageEl.classList.add('message', type === 'user' ? 'user-message' : 'bot-message');
  messageEl.textContent = content;
  chatBox.appendChild(messageEl);
  // Прокрутка чата вниз
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Обработчик отправки формы
chatForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  const userMessage = chatInput.value.trim();
  if (!userMessage) return;
  
  // Выводим сообщение пользователя на странице
  addMessage(userMessage, 'user');
  
  // Добавляем сообщение пользователя в историю
  chatHistory.push({ role: "user", content: userMessage });
  
  // Очищаем инпут
  chatInput.value = '';
  
  // Добавляем placeholder для ответа бота
  addMessage('...', 'bot');
  
  try {
    // Отправляем всю историю переписки для сохранения контекста
    const response = await provider.chatCompletion(chatHistory, options, (data) => {
      // При стриминге можно обновлять UI по частям (если требуется)
      console.log("Streaming data:", data);
    });
    
    // Находим последний элемент для ответа бота (placeholder)
    const botMessages = document.getElementsByClassName('bot-message');
    const lastBotMessage = botMessages[botMessages.length - 1];
    lastBotMessage.textContent = response;
    
    // Сохраняем ответ бота в истории
    chatHistory.push({ role: "assistant", content: response });
    
  } catch (error) {
    console.error("Ошибка при запросе:", error);
    const botMessages = document.getElementsByClassName('bot-message');
    const lastBotMessage = botMessages[botMessages.length - 1];
    lastBotMessage.textContent = 'Ошибка: ' + error.message;
  }
});
