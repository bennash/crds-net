function ga(originalCommand, event, eventCategory, eventAction) {
  console.log('Original ga() call signature:');
  console.log("ga('" + command + "', '" + event + "', '" + eventCategory + "', '" + eventAction + "')");
  const commandArray = originalCommand.split('.');
  const command = commandArray[commandArray.length - 1];

  switch(command) {
    case 'create':
      console.info("Skipping ga('create') command.");
      break;
    case 'send':
      gtag('event', eventAction, { 'event_category': eventCategory });
      break;
    case 'set':
      let data = {};
      data[event] = eventCategory;
      gtag('set', data);
      break;
    default:
      console.error('gtag() command not found! Command: ' + command);
  }
}
