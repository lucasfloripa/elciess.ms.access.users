import { User } from '@entities/User'
import { IUserRepositoryResponse } from '@interfaces/IRepository'
import { IUserModel, IUserMongoModel } from '@interfaces/IUser'
import { UserMongoSchema } from '@models/UserMongo'
import { IUserRepository } from '@repositories/IUserRepository'
import { createUserDTO } from '@utils/createUserDTO'

class MongoRepository implements IUserRepository {
  async get (id: string): Promise<IUserRepositoryResponse> {
    const mongoUser: IUserMongoModel = await UserMongoSchema.findOne({ id })
      .then(data => data)
      .catch(err => err.message)

    if (typeof mongoUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Mongo Error: ${mongoUser}.` }
    }

    if (!mongoUser) {
      return { status: 'fail', statusCode: 400, error: `User Mongo with id: ${id} not found.` }
    }

    const userDTO: User = createUserDTO(mongoUser)

    return { status: 'success', message: `User Mongo with id ${id} found!`, user: userDTO }
  }

  async create (newUserModel: IUserModel): Promise<IUserRepositoryResponse> {
    const newMongoUser: IUserMongoModel = await UserMongoSchema.create(newUserModel)
      .then(data => data)
      .catch(err => err.message)

    if (typeof newMongoUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Mongo Error: ${newMongoUser}.` }
    }

    const userDTO: User = createUserDTO(newMongoUser)

    return { status: 'success', message: 'User Mongo created!', user: userDTO }
  }

  async changePassword (id: string, newPassword: string): Promise<IUserRepositoryResponse> {
    const updatedMongoUser: IUserMongoModel = await UserMongoSchema.findOneAndUpdate({ id }, { password: newPassword }, {
      new: true,
      runValidators: true
    })
      .select('+password')
      .then(data => data)
      .catch(err => err.message)

    if (typeof updatedMongoUser === 'string') {
      return { status: 'fail', statusCode: 400, error: `Mongo Error: ${updatedMongoUser}.` }
    }

    const userDTO: User = createUserDTO(updatedMongoUser)

    return { status: 'success', message: `User Mongo with id ${id} change password!`, user: userDTO }
  }

  async delete (id: string): Promise<IUserRepositoryResponse> {
    const mongoUser: IUserMongoModel = await UserMongoSchema.findOne({ id })
      .then(data => data)
      .catch(err => err.message)

    if (typeof mongoUser === 'string') {
      return { status: 'fail', statusCode: 400, error: `Mongo Error: ${mongoUser}.` }
    }

    await mongoUser.remove()

    return { status: 'success', message: `User Mongo with id: ${id} deleted!` }
  }

  async findUserByEmail (email: string): Promise<IUserRepositoryResponse> {
    const mongoUser: IUserMongoModel = await UserMongoSchema.findOne({ email })
      .then(data => data)
      .catch(err => err.message)

    if (typeof mongoUser === 'string') {
      return { status: 'fail', statusCode: 400, error: `Mongo Error: ${mongoUser}.` }
    }

    if (!mongoUser) {
      return { status: 'fail', statusCode: 400, error: `User Mongo with email: ${email} not found.` }
    }

    const userDTO: User = createUserDTO(mongoUser)

    return { status: 'success', message: `User Mongo with email: ${email} found!`, user: userDTO }
  }
}

export { MongoRepository }
