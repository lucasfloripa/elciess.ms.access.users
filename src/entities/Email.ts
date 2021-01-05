import { IAddress } from '@interfaces/IEmail'

class Email {
  public to: IAddress
  public from: IAddress
  public subject: string
  public body: string

  constructor (email: string) {
    this.to = { email }
    this.from = { name: 'Elciess Project', email: 'elciess@gmail.com' }
    this.subject = 'Seja bem-vindo à Elciess!'
    this.body = '<p>Você já é capaz de realizar login em nossa plataforma</>'
  }
}

export { Email }
