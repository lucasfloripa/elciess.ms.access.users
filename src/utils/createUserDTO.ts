import { User } from '@entities/User'
import { IUserModel } from '@interfaces/IUser'

function createUserDTO (dbUser: IUserModel): User {
  const { id, email, password } = dbUser

  const userDTO: User = {
    id,
    email,
    password
  }

  return userDTO
}

export { createUserDTO }
