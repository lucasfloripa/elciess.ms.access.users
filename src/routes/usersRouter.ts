import { createController } from '@useCases/createUser'
import { deleteController } from '@useCases/deleteUser'
import { findUserByEmailController } from '@useCases/findUserByEmail'
import { changePasswordController } from '@useCases/changePassword'
import { protect } from '@middlewares/authHandler'
import { Router } from 'express'

const usersRouter = Router()

usersRouter.route('/')
  .get(findUserByEmailController.handle)
  .post(createController.handle)
  .delete(protect, deleteController.handle)
  .put(protect, changePasswordController.handle)

export { usersRouter }
