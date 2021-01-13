import { IUserModel } from './IUser'

export interface IUserRepositoryResponse {
  status: string
  statusCode?: number
  message?: string
  error?: string
  user?: IUserModel
  token?: string
}
