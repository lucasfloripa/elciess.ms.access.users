import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'
import { DeleteUserUseCase } from './DeleteUserUseCase'

class DeleteUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private deleteUserUseCase: DeleteUserUseCase
  ) {}

    handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
      const id = request.params.id

      if (!id) {
        return next(new ErrorResponse('Insert client request user id.', 400))
      }

      const deleteUserRequestDTO: IDeleteUserRequestDTO = {
        id
      }

      const deleteUserRequest = await this.deleteUserUseCase.execute(deleteUserRequestDTO)

      if (deleteUserRequest.status === 'fail') {
        return next(new ErrorResponse(deleteUserRequest.error, deleteUserRequest.statusCode))
      }

      return response.json(deleteUserRequest)
    })
}

export { DeleteUserController }
