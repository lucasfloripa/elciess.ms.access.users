import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { IDeleteUserRequestDTO } from './DeleteUserDTO'
import { DeleteUserUseCase } from './DeleteUserUseCase'

class DeleteUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private deleteUseCase: DeleteUserUseCase
  ) {}

    handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
      const { userId } = request

      const deleteRequestDTO: IDeleteUserRequestDTO = {
        userId
      }

      const deleteRequest = await this.deleteUseCase.execute(deleteRequestDTO)

      if (deleteRequest.status === 'fail') {
        return next(new ErrorResponse(deleteRequest.error, deleteRequest.statusCode))
      }

      return response.json(deleteRequest)
    })
}

export { DeleteUserController }
