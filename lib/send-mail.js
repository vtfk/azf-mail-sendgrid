const sendgrid = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = require('../config');

module.exports = async (msg) => {
    sendgrid.setApiKey(SENDGRID_API_KEY);

    return await sendgrid.send(msg)
        .then(() => {
            return true;
        })
        .catch(error => {
            if (error.response) {
                throw error.response.body;
            }
            else {
                throw error;
            }
        });
}