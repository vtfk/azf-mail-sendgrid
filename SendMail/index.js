const validateInput = require('../lib/validate-input');
const generateMail = require('../lib/generate-mail');
const sendMail = require('../lib/send-mail');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const matched = await validateInput(req);
    if (matched) {
        let mail = generateMail(req.body);
        if (await sendMail(mail)) {
            context.res = {
                body: mail
            };
        }
        else {
            context.res = {
                status: 418,
                body: mail
            };
        }
    }
    else {
        context.res = {
            status: 404,
            body: "Failed validation..."
        };
    }
}