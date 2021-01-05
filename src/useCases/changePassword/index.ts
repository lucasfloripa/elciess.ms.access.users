import { OracleRepository } from '@repositories/implementations/OracleRepository'
import { ChangePasswordController } from './ChangePasswordController'
import { ChangePasswordUseCase } from './ChangePasswordUseCase'

const oracleRepository = new OracleRepository()

const changePasswordUseCase = new ChangePasswordUseCase(
  oracleRepository
)

const changePasswordController = new ChangePasswordController(
  changePasswordUseCase
)

export { changePasswordUseCase, changePasswordController }
