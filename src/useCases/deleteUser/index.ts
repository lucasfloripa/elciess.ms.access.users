import { MongoRepository } from '@repositories/implementations/MongoRepository'
import { DeleteUserController } from './DeleteUserController'
import { DeleteUserUseCase } from './DeleteUserUseCase'

const mongoRepository = new MongoRepository()

const deleteUserUseCase = new DeleteUserUseCase(
  mongoRepository
)

const deleteUserController = new DeleteUserController(
  deleteUserUseCase
)

export { deleteUserUseCase, deleteUserController }
