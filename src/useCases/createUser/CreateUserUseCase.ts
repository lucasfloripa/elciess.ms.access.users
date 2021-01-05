import { Email } from '@entities/Email'
import { User } from '@entities/User'
import { IMailProvider } from '@providers/IMailProvider'
import { IUserRepository } from '@repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userOracleRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (createUserResquestDTO: ICreateUserRequestDTO) {
    const { email } = createUserResquestDTO

    const findUserByEmailResponse = await this.userOracleRepository.findUserByEmail(email)

    if (findUserByEmailResponse.user) {
      return { status: 'fail', statusCode: 400, error: `E-mail ${email} already used.` }
    }

    const user = new User(createUserResquestDTO)

    const createUserResponse = await this.userOracleRepository.createUser(user)

    const welcomeEmail = new Email(email)

    await this.mailProvider.sendEmail(welcomeEmail)

    return createUserResponse
  }
}

export { CreateUserUseCase }
