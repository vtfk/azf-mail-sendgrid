const validateInput = require('../lib/validate-input');
const generateMail = require('../lib/generate-mail');
const sendMail = require('../lib/send-mail');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const { validationMatched, validationError, validationMessage } = await validateInput(req);
    if (validationMatched) {
        let mail = generateMail(req.body);
        let { mailStatus, mailError } = await sendMail(mail);
        if (mailStatus) {
            context.res = {
                body: mail,
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
        else {
            context.res = {
                status: 500,
                body: {
                    error: mailError || '',
                    mail
                },
                headers: {
                    'Content-Type': 'application/json'
                }
            };
        }
    }
    else {
        context.res = {
            status: 400,
            body: {
                message: validationMessage,
                error: validationError || ''
            },
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
}