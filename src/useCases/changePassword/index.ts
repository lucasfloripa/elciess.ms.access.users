import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { ChangePasswordController } from './ChangePasswordController'
import { ChangePasswordUseCase } from './ChangePasswordUseCase'

const mongoRepository = new MongoRepository()

const changePasswordUseCase = new ChangePasswordUseCase(
  mongoRepository
)

const changePasswordController = new ChangePasswordController(
  changePasswordUseCase
)

export { changePasswordUseCase, changePasswordController }
