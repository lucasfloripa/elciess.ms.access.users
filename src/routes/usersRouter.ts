import { createController } from '@useCases/createUser'
import { deleteController } from '@useCases/deleteUser'
import { getController } from '@useCases/getUser'
import { changePasswordController } from '@useCases/changePassword'
import { protect } from '@middlewares/authHandler'
import { Router } from 'express'

const usersRouter = Router()

usersRouter.route('/')
  .post(createController.handle)
  .delete(protect, deleteController.handle)
  .put(protect, changePasswordController.handle)

usersRouter.route('/:id')
  .get(getController.handle)

export { usersRouter }
