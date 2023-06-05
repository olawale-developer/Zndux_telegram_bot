function handleMainMenu(bot, chatId, choice, menuChoice) {
  if (choice === '1') {
    const agentMenuOptions = [
      '1. Discover location',
      '2. Add a service',
      '3. Transact',
      '4. Need a service',
      '5. Check status',
      '0. Go back'
    ];
    bot.sendMessage(chatId, 'Agent menu:\n' + agentMenuOptions.join('\n'));
    menuChoice[chatId] = 'agentMenu';
  } else if (choice === '2') {
    const serviceMenuOptions = [
      '1. Znd Artisan ',
      '2. Znd Logistics',
      '3. Znd a food vendor',
      '4. Search',
      '5. Temporary location',
      '0. Go back'
    ];
    bot.sendMessage(chatId, 'Service menu:\n' + serviceMenuOptions.join('\n'));
    menuChoice[chatId] = 'serviceMenu';
  } 
else if (choice === '3') {
    bot.sendMessage(chatId, 'This feature is coming soon!')
    .then(() => {
      const menuOptions = [
        '1. Be an agent',
        '2. Need a service',
        '3. Transact'
      ];
      bot.sendMessage(chatId, 'Here is your menu:\n' + menuOptions.join('\n'));
      
    }); 
    menuChoice[chatId] = 'mainMenu';
  } else {
    bot.sendMessage(chatId, 'Invalid choice. Please select a valid option.');
  }
}

function handleAgentMenu(bot, chatId, choice,  menuChoice) {
  // Implement agent menu functionality here based on the choice
  // You can add if conditions similar to handleMainMenu 
  if(choice === '0'){
    const menuOptions = [
      '1. Be an agent',
      '2. Need a service',
      '3. Transact'
    ];
    const message2 = 'Here is your menu:\n' + menuOptions.join('\n');
    menuChoice[chatId] = 'mainMenu';
    bot.sendMessage(chatId, message2);
  }else{
  bot.sendMessage(chatId, 'This feature is coming soon!');
  delete menuChoice[chatId];
  }
}

function handleServicetMenu(bot, chatId, choice, menuChoice){
   if(choice === '1'){
    const artisanMenuOptions = [
      '1. Plumber',
      '2. Electrician',
      '3. Cleaner',
      '4. AC engineer',
      '5. Carpenter'
    ];
    bot.sendMessage(chatId, 'Artisan menu:\n' + artisanMenuOptions.join('\n'));
   }else if(choice === '2'){
    const logistcsiMenuOptions = [
      '1. Throw-a-grab',
      '2. Pickup'
    ];
    bot.sendMessage(chatId, 'Logistics menu:\n' + logistcsiMenuOptions.join('\n'));
    delete menuChoice[chatId];
   }else if (choice === '3'||choice === '4' || choice === '5') { 
    bot.sendMessage(chatId, 'This feature is coming soon!');
    delete menuChoice[chatId];
  }else if(choice === '0'){
    const menuOptions = [
      '1. Be an agent',
      '2. Need a service',
      '3. Transact'
    ];
    const message2 = 'Here is your menu:\n' + menuOptions.join('\n');
    menuChoice[chatId] = 'mainMenu';
    bot.sendMessage(chatId, message2);
  }
}

module.exports = { 
  handleMainMenu,
  handleAgentMenu,
  handleServicetMenu
};