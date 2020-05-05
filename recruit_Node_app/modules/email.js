const sgMail = require('@sendgrid/mail');
const config = require('../config.json');
const {EMAIL_PARAMS} = require('../utils/constants');
const HTTPRESPONS = require('../utils/httpResponses');

sgMail.setApiKey(config.SENDGRID_API_KEY);

module.exports = async (targetEmail, _id, emailType, senderName) => {

  try {
    const msg = {
      to: targetEmail,
      from: 'odat@sadeed.io',
      subject: EMAIL_PARAMS[emailType].TITLE,
      text: EMAIL_PARAMS[emailType].TEXT,
      html: EMAIL_PARAMS[emailType].HTML(config[emailType].FE_LINK+_id, config[emailType].EXP_IN_HRS, senderName)
    };
    await sgMail.send(msg);
    
  } catch (error) {
    throw HTTPRESPONS.CONFLICT("Email sending faild");
  }
}