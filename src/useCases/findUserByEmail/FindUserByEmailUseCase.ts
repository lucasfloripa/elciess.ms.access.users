import { IUserRepository } from '@repositories/IUserRepository'
import { IFindUserByEmailRequestDTO } from './FindUserByEmailDTO'

class FindUserByEmailUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (findUserByEmailRequestDTO: IFindUserByEmailRequestDTO) {
    const { email } = findUserByEmailRequestDTO

    if (!email) {
      return { status: 'fail', statusCode: 400, error: 'Insert user email.' }
    }

    const findUserByEmailResponse = await this.userMongoRepository.findUserByEmail(email)

    return findUserByEmailResponse
  }
}

export { FindUserByEmailUseCase }
