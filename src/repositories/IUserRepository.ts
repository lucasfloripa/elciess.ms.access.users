import { IUserRepositoryResponse } from '@interfaces/IRepository'
import { IUserModel } from '@interfaces/IUser'

export interface IUserRepository {
  get(id: string): Promise<IUserRepositoryResponse>
  create(newUserModel: IUserModel): Promise<IUserRepositoryResponse>
  delete(id: string): Promise<IUserRepositoryResponse>
  findUserByEmail(email:string): Promise<IUserRepositoryResponse>
  changePassword(id: string, newPassword: string): Promise<IUserRepositoryResponse>
}
