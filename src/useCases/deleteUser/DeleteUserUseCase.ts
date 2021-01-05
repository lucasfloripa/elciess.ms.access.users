import { IUserRepository } from '@repositories/IUserRepository'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'

class DeleteUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userOracleRepository: IUserRepository
  ) {}

  async execute (deleteUserRequestDTO: IDeleteUserRequestDTO) {
    const { id } = deleteUserRequestDTO

    const getUserResponse = await this.userOracleRepository.getUser(id)

    if (!getUserResponse.user) {
      return getUserResponse
    }

    const deleteUserResponse = await this.userOracleRepository.deleteUser(getUserResponse.user.id)

    return deleteUserResponse
  }
}

export { DeleteUserUseCase }
