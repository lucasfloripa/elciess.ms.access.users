import { User } from '@entities/User'
import { IRepositoryResponse } from '@interfaces/IRepository'
import { IUserModel, IUserMongoModel } from '@interfaces/IUser'
import { UserMongoSchema } from '@models/UserMongo'
import { IUserRepository } from '@repositories/IUserRepository'
import { createUserDTO } from '@utils/createUserDTO'

class MongoRepository implements IUserRepository {
  async getUser (id: string): Promise<IRepositoryResponse> {
    const mongoUser = await UserMongoSchema.findOne({ id }).select('+password')

    if (!mongoUser) {
      return { status: 'fail', statusCode: 400, error: `User Mongo with id: ${id} not found.` }
    }

    const userDTO: User = createUserDTO(mongoUser)

    return { status: 'success', statusCode: 200, message: `User Mongo with id ${id} found!`, user: userDTO }
  }

  async createUser (newUserModel: IUserModel): Promise<IRepositoryResponse> {
    const newMongoUser: IUserMongoModel = await UserMongoSchema.create(newUserModel)
      .then(data => data)
      .catch(err => err.message)

    if (typeof newMongoUser === 'string') {
      return { status: 'fail', statusCode: 400, error: `Mongo Error: ${newMongoUser}` }
    }

    const userDTO: User = createUserDTO(newMongoUser)

    return { status: 'success', statusCode: 200, message: 'User Mongo created!', user: userDTO }
  }

  async changePassword (id: string, newPassword: string): Promise<IRepositoryResponse> {
    const updatedMongoUser = await UserMongoSchema.findOneAndUpdate({ id }, { password: newPassword }, {
      new: true,
      runValidators: true
    }).select('+password')

    const userDTO: User = createUserDTO(updatedMongoUser)

    return { status: 'success', statusCode: 200, message: 'User Mongo updated!', user: userDTO }
  }

  async deleteUser (id: string): Promise<IRepositoryResponse> {
    const mongoUser = UserMongoSchema.findOne({ id })

    await mongoUser.remove()

    return { status: 'success', statusCode: 200, message: `User Mongo with id: ${id} deleted!` }
  }

  async findUserByEmail (email: string): Promise<IRepositoryResponse> {
    const mongoUser = await UserMongoSchema.findOne({ email }).select('+password')

    if (!mongoUser) {
      return { status: 'fail', statusCode: 400, error: `User Mongo with email: ${email} not found.` }
    }

    const userDTO: User = createUserDTO(mongoUser)

    return { status: 'success', statusCode: 200, message: `User Mongo with email: ${email} found!`, user: userDTO }
  }
}

export { MongoRepository }
