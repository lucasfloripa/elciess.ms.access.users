import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { GetUserController } from './GetUserController'
import { GetUserUseCase } from './GetUserUseCase'

const mongoRepository = new MongoRepository()

const getUserUseCase = new GetUserUseCase(
  mongoRepository
)

const getUserController = new GetUserController(
  getUserUseCase
)

export { getUserUseCase, getUserController }
