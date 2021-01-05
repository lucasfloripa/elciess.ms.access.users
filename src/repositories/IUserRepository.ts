import { IRepositoryResponse } from '@interfaces/IRepository'
import { IUserModel } from '@interfaces/IUser'

export interface IUserRepository {
  getUser(id: string): Promise<IRepositoryResponse>
  createUser(newUserModel: IUserModel): Promise<IRepositoryResponse>
  deleteUser(id: string): Promise<IRepositoryResponse>
  changePassword(id: string, newPassword: string): Promise<IRepositoryResponse>
  findUserByEmail(email:string): Promise<IRepositoryResponse>
}
