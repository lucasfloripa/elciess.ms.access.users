import { IUserRepository } from '@repositories/IUserRepository'
import { hashNewPassword } from '@utils/hashNewPassword'
import { IChangePasswordRequestDTO } from './ChangePasswordDTO'

class ChangePasswordUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (changePasswordRequestDTO: IChangePasswordRequestDTO) {
    const { userId, newPassword } = changePasswordRequestDTO

    if (!userId) {
      return { status: 'fail', statusCode: 400, error: 'Invalid User.' }
    }

    if (!newPassword) {
      return { status: 'fail', statusCode: 400, error: 'Insert new password.' }
    }

    const getResponse = await this.userMongoRepository.get(userId)

    if (!getResponse.user) {
      return getResponse
    }

    const hashedNewPassword = await hashNewPassword(newPassword)

    const changePasswordResponse = await this.userMongoRepository.changePassword(userId, hashedNewPassword)

    return changePasswordResponse
  }
}

export { ChangePasswordUseCase }
