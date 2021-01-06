import { ErrorResponse } from '@utils/ErrorResponse'
import { asyncHandler } from '@middlewares/asyncHandler'
import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const protect = asyncHandler(async (request: Request, response: Response, next: NextFunction) => {
  const { authorization } = request.headers
  let token: string

  if (authorization?.startsWith('Bearer')) {
    token = authorization.split(' ')[1]
  }

  if (!token) {
    return next(new ErrorResponse('Invalid token', 401))
  }

  try {
    interface decoded {
      id: string
    }

    const data = jwt.verify(token, process.env.JWT_SECRET) as decoded

    request.userId = data.id

    next()
  } catch (error) {
    return next(new ErrorResponse('Not authorize to access this route', 401))
  }
})

export { protect }
