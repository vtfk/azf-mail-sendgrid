const sendgrid = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = require('../config');

module.exports = (msg) => {
    sendgrid.setApiKey(SENDGRID_API_KEY);

    return sendgrid.send(msg)
        .then(() => true)
        .catch(error => {
            console.log("Failed to send mail:", error);
            return false;
        })
}