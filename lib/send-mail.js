const sendgrid = require('@sendgrid/mail');
const { SENDGRID_API_KEY } = require('../config');

module.exports = async (msg) => {
    sendgrid.setApiKey(SENDGRID_API_KEY);
    let result = {
        mailStatus: undefined,
        mailError: undefined
    };

    await sendgrid.send(msg)
        .then(() => {
            result.mailStatus = true
        })
        .catch(error => {
            result.mailStatus = false;

            if (error.response) {
                result.mailError = error.response.body;
            }
            else {
                result.mailError = error;
            }
        });
    
    return result;
}