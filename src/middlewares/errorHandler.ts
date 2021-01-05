import { ErrorResponse } from '@utils/ErrorResponse'
import { NextFunction, Request, Response } from 'express'

const errorHandler = (error: ErrorResponse, request: Request, response: Response, next: NextFunction) => {
  console.log(error.stack)

  response.status(error.statusCode || 500).json({
    status: 'fail',
    error: error.message || 'Server Error'
  })
}

export { errorHandler }
