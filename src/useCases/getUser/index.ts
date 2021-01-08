import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { GetUserController } from './GetUserController'
import { GetUserUseCase } from './GetUserUseCase'

const mongoRepository = new MongoRepository()

const getUseCase = new GetUserUseCase(
  mongoRepository
)

const getController = new GetUserController(
  getUseCase
)

export { getUseCase, getController }
