const { Validator } = require('node-input-validator');
const validationTemplate = require('./inputs.json');

module.exports = ({body}) => {
    const v = new Validator(body, validationTemplate);

    if (body.text || body.html || body.templateId) {
        return v.check().then((matched) => {
            if (!matched) {
                console.log("Validation NOT passed!", v.errors);
            }

            return matched;
        });
    }
    else {
        console.log("Missing text, html or templateId");
        return false;
    }
}  