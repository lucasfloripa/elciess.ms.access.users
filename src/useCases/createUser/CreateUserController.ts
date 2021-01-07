import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { ICreateUserRequestDTO } from './CreateUserDTO'
import { CreateUserUseCase } from './CreateUserUseCase'

class CreateUserController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private createUserUseCase: CreateUserUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const createUserRequestDTO = request.body as ICreateUserRequestDTO

    const { email, password } = createUserRequestDTO

    if (!email) {
      return next(new ErrorResponse('Insert email.', 400))
    }

    if (!password) {
      return next(new ErrorResponse('Insert password.', 400))
    }

    const createUserResponse = await this.createUserUseCase.execute(createUserRequestDTO)

    if (createUserResponse.status === 'fail') {
      return next(new ErrorResponse(createUserResponse.error, createUserResponse.statusCode))
    }

    return response.json(createUserResponse)
  })
}

export { CreateUserController }
