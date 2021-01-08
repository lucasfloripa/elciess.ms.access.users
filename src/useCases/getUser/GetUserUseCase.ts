import { IUserRepository } from '@repositories/IUserRepository'
import { IGetUserRequestDTO } from './GetUserDTO'

class GetUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (getRequestDTO: IGetUserRequestDTO) {
    const { id } = getRequestDTO

    if (!id) {
      return { status: 'fail', statusCode: 400, error: 'Insert user id.' }
    }

    const getResponse = await this.userMongoRepository.get(id)

    return getResponse
  }
}

export { GetUserUseCase }
