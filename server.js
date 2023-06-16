const TelegramBot = require('node-telegram-bot-api');
const telegramToken = '6236901589:AAGCAjIS-j_YAI4BRiOz4ACJDYf8MZoUc1A';
const bot = new TelegramBot(telegramToken, { polling: true });
const mysql = require('mysql');
const menuHandler = require('./menu');

let menuChoice = {};


function sendMessage(chatId, message) {
  return new Promise((resolve, reject) => {
    bot.sendMessage(chatId, message)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}
const db = mysql.createConnection({
    host: 'zndux-telegrambot.cjhb1gki5cfu.eu-north-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password: 'Sirfitech1#',
    database: 'Telegram_Database'
})



bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to Zndux! say "Hi Zndux" to start a conversation');
});



bot.onText(/hello|hi|hey/i, (msg) => {
  const chatId = msg.chat.id;
  const firstName = msg.chat.first_name
 
 
  // Check if the user already exists in the database
  db.query('SELECT * FROM users WHERE chat_id = ?', chatId, (err, rows) => {
    if (err) {
      console.error('Error querying the database:', err);
      return;
    }

    if (rows.length > 0) {
      // User already exists in the database
      const message =  `Welcome to zndux ${firstName}, how can i help you today?`;
      
      const menuOptions = [ 
        '1. Be an agent',
        '2. Need a service',
        '3. Transact'
        
      ];
      const message2 = 'Here is your menu:\n' + menuOptions.join('\n');
      menuChoice[chatId] = 'mainMenu';
      
      sendMessage(chatId, message)
      .then(() => sendMessage(chatId, message2))
      .catch((error) => {
        console.error("Error sending messages:", error);
      });
} else {
      const options = {
        reply_markup: {
          keyboard: [[{ text: 'Share Phone Number', request_contact: true }]],
          one_time_keyboard: true
        }
      };
    
      bot.sendMessage(chatId, 'Please share your phone number.', options);
    }
  });
  });



  bot.onText(/\d+/, (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text;

    if (menuChoice[chatId] === 'mainMenu') {
      menuHandler.handleMainMenu(bot, chatId, messageText, menuChoice);
    } else if (menuChoice[chatId] === 'agentMenu') {
      menuHandler.handleAgentMenu(bot, chatId, messageText, menuChoice);
    }  else if (menuChoice[chatId] === 'serviceMenu') {
      menuHandler.handleServicetMenu(bot, chatId, messageText, menuChoice);
    }
 



  });

  
  bot.on('contact', (msg) => {

  const chatId = msg.chat.id;
  const phoneNumber = msg.contact.phone_number;
  const firstName = msg.contact.first_name;
  const lastName = msg.contact.last_name;

  const user = {
    chat_id: chatId,
    phone_number: phoneNumber,
    first_name: firstName,
    //last_name: lastName
  };
      // User doesn't exist, store the data in the database
      db.query('INSERT INTO users SET ?', user, (err, result) => {
        if (err) {
          console.error('Error storing user data in the database:', err);
          return;
        }
        const message =  `Welcome to zndux ${firstName}, how can i help you today?`;
        const menuOptions = [
          
          '1. Be an agent',
          '2. Need a service',
          '3. Transact'
          
        ];
        const message2 = 'Here is your menu:\n' + menuOptions.join('\n');
        sendMessage(chatId, message)
        .then(() => sendMessage(chatId, message2))
        .catch((error) => {
          console.error("Error sending messages:", error);
        });
        menuChoice[chatId] = 'mainMenu';
      
      });

       bot.sendMessage(chatId, 'Thank you for sharing your phone number!', { reply_markup: { remove_keyboard: true } });
     
  });
