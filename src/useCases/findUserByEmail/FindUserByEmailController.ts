import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { IFindUserByEmailRequestDTO } from './FindUserByEmailDTO'
import { FindUserByEmailUseCase } from './FindUserByEmailUseCase'

class FindUserByEmailController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private findUserByEmailUseCase: FindUserByEmailUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const findUserByEmailRequestDTO = request.body as IFindUserByEmailRequestDTO

    const findUserByEmailResponse = await this.findUserByEmailUseCase.execute(findUserByEmailRequestDTO)

    if (findUserByEmailResponse.status === 'fail') {
      return next(new ErrorResponse(findUserByEmailResponse.error, findUserByEmailResponse.statusCode))
    }

    response.json(findUserByEmailResponse)
  })
}

export { FindUserByEmailController }
