require('dotenv').config(); // sorito_bot
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const PREFIX = '!';
  const chatId = msg.chat.id;

  if(msg.text.startsWith(PREFIX)){
    // Get command name and arguments:
    const [CMD_NAME, ...args] = msg.text
    .toLowerCase()
    .trim()
    .substring(PREFIX.length)
    .split(/\s+/);

    // Commands filter:
    if(CMD_NAME === 'test'){
      bot.sendMessage(chatId, 'Test command');
    }

  }

  

  // send a message to the chat acknowledging receipt of their message
});