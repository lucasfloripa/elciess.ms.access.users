import { OracleRepository } from '@repositories/implementations/OracleRepository'
import { GetUserController } from './GetUserController'
import { GetUserUseCase } from './GetUserUseCase'

const oracleRepository = new OracleRepository()

const getUserUseCase = new GetUserUseCase(
  oracleRepository
)

const getUserController = new GetUserController(
  getUserUseCase
)

export { getUserUseCase, getUserController }
