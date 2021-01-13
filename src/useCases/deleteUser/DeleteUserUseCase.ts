import { IUserRepository } from '@repositories/IUserRepository'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'

class DeleteUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (deleteRequestDTO: IDeleteUserRequestDTO) {
    const { userId } = deleteRequestDTO

    if (!userId) {
      return { status: 'fail', statusCode: 400, error: 'Invalid User.' }
    }

    const getUserResponse = await this.userMongoRepository.get(userId)

    if (!getUserResponse.user) {
      return getUserResponse
    }

    const deleteUserResponse = await this.userMongoRepository.delete(getUserResponse.user.id)

    return deleteUserResponse
  }
}

export { DeleteUserUseCase }
