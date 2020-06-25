module.exports = (params) => {
    return {
        "to": params.to,
        "cc": params.cc || '',
        "bcc": params.bcc || '',
        "from": params.from,
        "replyTo": params.replyTo || params.from,
        "subject": params.subject,
        "text": params.text || '',
        "html": params.html || '',
        "isMultiple": params.isMultiple || false,
        "headers": params.headers || {},
        "attachments": params.attachments || []
    };
}