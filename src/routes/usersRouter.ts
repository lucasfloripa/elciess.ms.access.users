import { createUserController } from '@useCases/createUser'
import { deleteUserController } from '@useCases/deleteUser'
import { getUserController } from '@useCases/getUser'
import { changePasswordController } from '@useCases/changePassword'
import { protect } from '@middlewares/authHandler'
import { Router } from 'express'

const usersRouter = Router()

usersRouter.route('/')
  .post(createUserController.handle)
  .delete(protect, deleteUserController.handle)
  .put(protect, changePasswordController.handle)

usersRouter.route('/:id')
  .get(getUserController.handle)

export { usersRouter }
