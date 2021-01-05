import { IUserModel } from './IUser'

export interface IRepositoryResponse {
  status: string
  statusCode: number
  message?: string
  error?: string
  user?: IUserModel
  users?: IUserModel[]
}
