import { IUserRepository } from '@repositories/IUserRepository'
import { hashNewPassword } from '@utils/hashNewPassword'
import { IChangePasswordRequestDTO } from './ChangePasswordDTO'

class ChangePasswordUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (changePasswordRequestDTO: IChangePasswordRequestDTO) {
    const { id, newPassword } = changePasswordRequestDTO

    const getUserResponse = await this.userMongoRepository.getUser(id)

    if (!getUserResponse.user) {
      return getUserResponse
    }

    const hashedNewPassword = await hashNewPassword(newPassword)

    const changePasswordResponse = await this.userMongoRepository.changePassword(id, hashedNewPassword)

    return changePasswordResponse
  }
}

export { ChangePasswordUseCase }
