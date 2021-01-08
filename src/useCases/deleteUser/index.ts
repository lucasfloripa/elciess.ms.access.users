import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const mongoRepository = new MongoRepository()

const deleteUseCase = new DeleteUserUseCase(
  mongoRepository
)

const deleteController = new DeleteUserController(
  deleteUseCase
)

export { deleteUseCase, deleteController }
