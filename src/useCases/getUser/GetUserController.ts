import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { IGetUserRequestDTO } from './GetUserDTO'
import { GetUserUseCase } from './GetUserUseCase'

class GetUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private getUseCase: GetUserUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const id = request.params.id

    const getResquestDTO: IGetUserRequestDTO = {
      id
    }

    const getResponse = await this.getUseCase.execute(getResquestDTO)

    if (getResponse.status === 'fail') {
      return next(new ErrorResponse(getResponse.error, getResponse.statusCode))
    }

    response.json(getResponse)
  })
}

export { GetUserController }
