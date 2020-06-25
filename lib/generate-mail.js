module.exports = (params) => {
    return {
        "to": params.to,
        "cc": params.cc || '',
        "bcc": params.bcc || '',
        "from": params.from,
        "replyTo": params.replyTo || params.from,
        "subject": params.subject,
        "text": params.text || undefined,
        "html": params.html || undefined,
        "isMultiple": params.isMultiple || false,
        "headers": params.headers || {},
        "attachments": params.attachments || [],
        "templateId": params.templateId || undefined,
        "dynamicTemplateData": params.templateData || {}
    };
}
