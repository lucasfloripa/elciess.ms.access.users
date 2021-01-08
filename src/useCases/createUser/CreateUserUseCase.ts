import { Email } from '@entities/Email'
import { User } from '@entities/User'
import { IMailProvider } from '@providers/IMailProvider'
import { IUserRepository } from '@repositories/IUserRepository'
import { ICreateUserRequestDTO } from './CreateUserDTO'

class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository,
    private mailProvider: IMailProvider
  ) {}

  async execute (createUserResquestDTO: ICreateUserRequestDTO) {
    const { email, password } = createUserResquestDTO

    if (!email) {
      return { status: 'fail', statusCode: 400, error: 'Insert e-mail.' }
    }

    if (!password) {
      return { status: 'fail', statusCode: 400, error: 'Insert password.' }
    }

    const findUserByEmailResponse = await this.userMongoRepository.findUserByEmail(email)

    if (findUserByEmailResponse.user) {
      return { status: 'fail', statusCode: 400, error: `E-mail ${email} already used.` }
    }

    const user = new User(createUserResquestDTO)

    const createUserResponse = await this.userMongoRepository.createUser(user)

    if (createUserResponse.status === 'success') {
      await this.mailProvider.sendEmail(new Email(email))
    }

    return createUserResponse
  }
}

export { CreateUserUseCase }
