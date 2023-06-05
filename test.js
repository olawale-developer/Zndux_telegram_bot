// const TelegramBot = require('node-telegram-bot-api');

// // Replace 'YOUR_TELEGRAM_BOT_TOKEN' with your actual bot token
// const bot = new TelegramBot('6236901589:AAGCAjIS-j_YAI4BRiOz4ACJDYf8MZoUc1A', { polling: true });

// let menuChoice = {};

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, 'Hello! How can I assist you?');
// });

// bot.onText(/hi|hello|hey/i, (msg) => {
//   const chatId = msg.chat.id;
//   const menuOptions = [
//     '1. Apply as agent',
//     '2. Need a service',
//     '3. Need logistics',
//     '4. Check balance'
//   ];
//   bot.sendMessage(chatId, 'Here is your menu:\n' + menuOptions.join('\n'));
//   menuChoice[chatId] = 'mainMenu';




//   bot.onText(/\d+/, (msg) => {
//     const chatId = msg.chat.id;
//     const messageText = msg.text;
    
//     if (menuChoice[chatId] === 'mainMenu') {
//       handleMainMenu(chatId, messageText);
//     } else if (menuChoice[chatId] === 'agentMenu') {
//       handleAgentMenu(chatId, messageText);
//     }
//   });

// });


// function handleMainMenu(chatId, choice) {
//   if (choice === '1') {
//     const agentMenuOptions = [
//       '1. Discover location',
//       '2. Add a service',
//       '3. Transact'
//     ];
//     bot.sendMessage(chatId, 'Agent menu:\n' + agentMenuOptions.join('\n'));
//     menuChoice[chatId] = 'agentMenu';
//   } else if (choice === '2' || choice === '3' || choice === '4') {
//     bot.sendMessage(chatId, 'This feature is coming soon!');
//     delete menuChoice[chatId];
//   } else {
//     bot.sendMessage(chatId, 'Invalid choice. Please select a valid option.');
//   }
// }

// function handleAgentMenu(chatId, choice) {
//   // Implement agent menu functionality here based on the choice
//   // You can add if conditions similar to handleMainMenu
//   bot.sendMessage(chatId, 'This feature is coming soon!');
//   delete menuChoice[chatId];
// }