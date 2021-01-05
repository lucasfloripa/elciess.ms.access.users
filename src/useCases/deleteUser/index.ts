import { OracleRepository } from '@repositories/implementations/OracleRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const oracleRepository = new OracleRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  oracleRepository
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export { deleteUserUseCase, deleteUserController }
