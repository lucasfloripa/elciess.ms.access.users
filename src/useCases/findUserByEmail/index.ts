import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { FindUserByEmailController } from './FindUserByEmailController'
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase'

const mongoRepository = new MongoRepository()

const findUserByEmailUseCase = new FindUserByEmailUseCase(
  mongoRepository
)

const findUserByEmailController = new FindUserByEmailController(
  findUserByEmailUseCase
)

export { findUserByEmailUseCase, findUserByEmailController }
