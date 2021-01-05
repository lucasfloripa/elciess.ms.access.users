import { IMessage } from '@interfaces/IEmail'
import { IMailProvider } from '@providers/IMailProvider'
import { createTransport } from 'nodemailer'

class NodemailerProvider implements IMailProvider {
  async sendEmail (message: IMessage): Promise<void> {
    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_TRANSPORTER_USER,
        pass: process.env.MAIL_TRANSPORTER_PASSWORD
      }
    })

    const mailOptions = {
      from: message.from.email,
      to: message.to.email,
      subject: message.subject,
      text: message.body
    }

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(`Email sended to ${message.to.email}`)
      }
    })
  }
}

export { NodemailerProvider }
