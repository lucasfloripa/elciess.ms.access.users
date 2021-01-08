import { IUserRepository } from '@repositories/IUserRepository'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'

class DeleteUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (deleteUserRequestDTO: IDeleteUserRequestDTO) {
    const { userId } = deleteUserRequestDTO

    const getUserResponse = await this.userMongoRepository.getUser(userId)

    if (!getUserResponse.user) {
      return getUserResponse
    }

    const deleteUserResponse = await this.userMongoRepository.deleteUser(getUserResponse.user.id)

    return deleteUserResponse
  }
}

export { DeleteUserUseCase }
