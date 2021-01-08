import { NodemailerProvider } from '@providers/implementations/NodemailerProvider'
import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const mongoRepository = new MongoRepository()
const nodemailerProvider = new NodemailerProvider()

const createUseCase = new CreateUserUseCase(
  mongoRepository,
  nodemailerProvider
)

const createController = new CreateUserController(
  createUseCase
)

export { createUseCase, createController }
