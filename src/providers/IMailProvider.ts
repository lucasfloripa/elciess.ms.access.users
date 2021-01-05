import { IMessage } from '@interfaces/IEmail'

interface IMailProvider {
  sendEmail(message: IMessage): Promise<void>
}

export { IMailProvider }
