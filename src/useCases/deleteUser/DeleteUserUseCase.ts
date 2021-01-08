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

    const getResponse = await this.userMongoRepository.get(userId)

    if (!getResponse.user) {
      return getResponse
    }

    const deleteResponse = await this.userMongoRepository.delete(getResponse.user.id)

    return deleteResponse
  }
}

export { DeleteUserUseCase }
