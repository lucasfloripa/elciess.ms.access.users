import { asyncHandler } from '@middlewares/asyncHandler'
import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'
import { IChangePasswordRequestDTO } from './ChangePasswordDTO'
import { ChangePasswordUseCase } from './ChangePasswordUseCase'

class ChangePasswordController {
  // eslint-disable-next-line no-useless-constructor
  constructor (
    private changePasswordUseCase: ChangePasswordUseCase
  ) {}

  handle = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
    const { userId } = request

    const { newPassword } = request.body as IChangePasswordRequestDTO

    if (!userId) {
      return next(new ErrorResponse('Insert user id.', 400))
    }

    if (!newPassword) {
      return next(new ErrorResponse('Insert new password.', 400))
    }

    const changePasswordRequestDTO: IChangePasswordRequestDTO = {
      userId,
      newPassword
    }

    const changePasswordResponse = await this.changePasswordUseCase.execute(changePasswordRequestDTO)

    if (changePasswordResponse.status === 'fail') {
      return next(new ErrorResponse(changePasswordResponse.error, changePasswordResponse.statusCode))
    }

    return response.json(changePasswordResponse)
  })
}

export { ChangePasswordController }
