import { createController } from '@useCases/create'
import { deleteController } from '@useCases/delete'
import { getController } from '@useCases/get'
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
