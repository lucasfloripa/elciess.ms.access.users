import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { IGetUserRequestDTO } from './GetUserDTO'
import { GetUserUseCase } from './GetUserUseCase'

class GetUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getUserUseCase: GetUserUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id

    if (!id) {
      return next(new ErrorResponse('Insert client request user id', 400))
    }

    const getUserResquestDTO: IGetUserRequestDTO = {
      id
    }

    const getUserResponse = await this.getUserUseCase.execute(getUserResquestDTO)

    response.json(getUserResponse)
  })
}

export { GetUserController }
