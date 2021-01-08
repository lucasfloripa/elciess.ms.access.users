import { IRepositoryResponse } from '@interfaces/IRepository'
import { IUserModel } from '@interfaces/IUser'

export interface IUserRepository {
  get(id: string): Promise<IRepositoryResponse>
  create(newUserModel: IUserModel): Promise<IRepositoryResponse>
  delete(id: string): Promise<IRepositoryResponse>
  findUserByEmail(email:string): Promise<IRepositoryResponse>
  changePassword(id: string, newPassword: string): Promise<IRepositoryResponse>
}
