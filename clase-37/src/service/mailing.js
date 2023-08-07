import mailer from 'nodemailer'
import config from '../config/config.js'

export default class MailingService {
    constructor() {
        this.client = mailer.createrTransport({
            service: config.MAILING.SERVICE,
            PORT: 587,
            auth: {
                user: config.MAILING.USER,
                pass: config.MAILING.PASSWORD
            }
        })
    }

    sendSimpleMail = async ({ from, to, subject, html, attachment = [] }) => {
        let result = await this.client.sendMail({
            from,
            to,
            subject,
            html,
            attachment
        })
        console.log(result);
        return result;
    }
}