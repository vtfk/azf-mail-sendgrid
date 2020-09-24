const handleMail = require('../lib/handle-mail');

module.exports = async function(context, message) {
    context.log('JavaScript ServiceBus queue trigger function processed message', message);
    
    context.res = await handleMail(context, message, true);
};