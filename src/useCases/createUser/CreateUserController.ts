import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private createUseCase: CreateUserUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const createRequestDTO = request.body as ICreateUserRequestDTO

    const createResponse = await this.createUseCase.execute(createRequestDTO)

    if (createResponse.status === 'fail') {
      return next(new ErrorResponse(createResponse.error, createResponse.statusCode))
    }

    return response.json(createResponse)
  })
}

export { CreateUserController }
