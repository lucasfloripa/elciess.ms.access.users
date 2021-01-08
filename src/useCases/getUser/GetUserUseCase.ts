import { IUserRepository } from '@repositories/IUserRepository'
import { IGetUserRequestDTO } from './GetUserDTO'

class GetUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (getUserRequestDTO: IGetUserRequestDTO) {
    const { id } = getUserRequestDTO

    if (!id) {
      return { status: 'fail', statusCode: 400, error: 'Insert user id.' }
    }

    const getUserResponse = await this.userMongoRepository.getUser(id)

    return getUserResponse
  }
}

export { GetUserUseCase }
