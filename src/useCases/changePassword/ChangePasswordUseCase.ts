import { IUserRepository } from '@repositories/IUserRepository'
import { hashNewPassword } from '@utils/hashNewPassword'
import { request } from 'express'
import { IChangePasswordRequestDTO } from './ChangePasswordDTO'

class ChangePasswordUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private userMongoRepository: IUserRepository
  ) {}

  async execute (changePasswordRequestDTO: IChangePasswordRequestDTO) {
    const { userId } = request

    const { newPassword } = changePasswordRequestDTO

    const getUserResponse = await this.userMongoRepository.getUser(userId)

    if (!getUserResponse.user) {
      return getUserResponse
    }

    const hashedNewPassword = await hashNewPassword(newPassword)

    const changePasswordResponse = await this.userMongoRepository.changePassword(userId, hashedNewPassword)

    return changePasswordResponse
  }
}

export { ChangePasswordUseCase }
