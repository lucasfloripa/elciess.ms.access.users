import { NodemailerProvider } from '@providers/implementations/NodemailerProvider'
import { OracleRepository } from '@repositories/implementations/OracleRepository'
import { CreateUserController } from './CreateUserController'
import { CreateUserUseCase } from './CreateUserUseCase'

const oracleRepository = new OracleRepository()
const nodemailerProvider = new NodemailerProvider()

const createUserUseCase = new CreateUserUseCase(
  oracleRepository,
  nodemailerProvider
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }
