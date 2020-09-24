const compileBody = require('./compile-body');

module.exports = (params) => {
    let body;
    if (params.template && params.template.templateName && params.template.templateData) {
        // generate mail body with builtin template and data
        body = compileBody.fromTemplateName(params.template.templateName, params.template.templateData);
    }
    else if (params.template && params.template.template && params.template.templateData) {
        // generate mail body with raw template and data
        body = compileBody.fromRawTemplate(params.template.template, params.template.templateData);
    }

    return {
        to: params.to,
        from: params.from,
        replyTo: params.replyTo || params.from,
        subject: params.subject,
        cc: params.cc || [],
        bcc: params.bcc || [],
        text: params.text || undefined,
        html: body || params.html || undefined,
        isMultiple: params.isMultiple || false,
        headers: params.headers || {},
        attachments: params.attachments || []
    };
}
