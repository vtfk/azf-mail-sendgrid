const { Validator } = require('node-input-validator');
const validationTemplate = require('./inputs.json');

module.exports = (req) => {
    const v = new Validator(req.body, validationTemplate);

    return v.check().then((matched) => {
        if (!matched) {
            console.log("Validation NOT passed!", v.errors);
        }

        return matched;
    });
}  