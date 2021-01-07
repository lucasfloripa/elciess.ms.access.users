import { User } from '@entities/User'
import { IRepositoryResponse } from '@interfaces/IRepository'
import { IUserModel } from '@interfaces/IUser'
import { UserOracle } from '@models/UserOracle'
import { IUserRepository } from '@repositories/IUserRepository'
import { createUserDTO } from '@utils/createUserDTO'
import { getConnection } from 'typeorm'

class OracleRepository implements IUserRepository {
  async getUser (id: string): Promise<IRepositoryResponse> {
    const usersRepository = getConnection().getRepository(UserOracle)

    const oracleUser: UserOracle = await usersRepository.findOne({ id })
      .then(data => data)
      .catch(err => err.message)

    if (typeof oracleUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Oracle error: ${oracleUser}` }
    }

    if (!oracleUser) {
      return { status: 'fail', statusCode: 400, error: `User Oracle with id: ${id} not found.` }
    }

    const userDTO: User = createUserDTO(oracleUser)

    return { status: 'success', statusCode: 200, message: `User Oracle with id: ${id} found!`, user: userDTO }
  }

  async createUser (newUserModel: IUserModel): Promise<IRepositoryResponse> {
    const usersRepository = getConnection().getRepository(UserOracle)

    const oracleUserInstance = new UserOracle(newUserModel)

    const newOracleUser: UserOracle = await usersRepository.save(oracleUserInstance)
      .then(data => data)
      .catch(err => err.message)

    if (typeof newOracleUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Oracle Error: ${newOracleUser}.` }
    }

    const userDTO: User = createUserDTO(newOracleUser)

    return { status: 'success', statusCode: 200, message: 'User Oracle created!', user: userDTO }
  }

  async changePassword (id: string, newPassword: string): Promise<IRepositoryResponse> {
    const usersRepository = getConnection().getRepository(UserOracle)

    const updatedOracleUser: UserOracle = await usersRepository.update({ id }, { password: newPassword })
      .then(data => data)
      .catch(err => err.message)

    if (typeof updatedOracleUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Oracle Error: ${updatedOracleUser}.` }
    }

    return { status: 'success', statusCode: 200, message: `User Oracle with id ${id} change password!` }
  }

  async deleteUser (id: string): Promise<IRepositoryResponse> {
    const usersRepository = getConnection().getRepository(UserOracle)

    const deletedOracleUser = await usersRepository.delete({ id })
      .then(data => data)
      .catch(err => err.message)

    if (typeof deletedOracleUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Oracle Error: ${deletedOracleUser}.` }
    }

    return { status: 'success', statusCode: 200, message: `User Oracle with id: ${id} deleted!` }
  }

  async findUserByEmail (email: string): Promise<IRepositoryResponse> {
    const usersRepository = getConnection().getRepository(UserOracle)

    const oracleUser: UserOracle = await usersRepository.findOne({ email })
      .then(data => data)
      .catch(err => err.message)

    if (typeof oracleUser === 'string') {
      return { status: 'fail', statusCode: 500, error: `Oracle Error: ${oracleUser}.` }
    }

    if (!oracleUser) {
      return { status: 'fail', statusCode: 400, error: `User Oracle with email: ${email} not found.` }
    }

    const userDTO: User = createUserDTO(oracleUser)

    return { status: 'success', statusCode: 200, message: `User Oracle with email: ${email} found!`, user: userDTO }
  }
}

export { OracleRepository }
