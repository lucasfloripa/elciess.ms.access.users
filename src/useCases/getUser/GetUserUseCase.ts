import { IUserRepository } from '@repositories/IUserRepository'
import { IGetUserRequestDTO } from './GetUserDTO'

class GetUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (getUserRequestDTO: IGetUserRequestDTO) {
    const { id } = getUserRequestDTO

    const getUserResponse = await this.userMongoRepository.getUser(id)

    return getUserResponse
  }
}

export { GetUserUseCase }
