import { Document } from 'mongoose'

export interface IUserModel {
  id?: string
  email: string
  password: string
}

export interface IUserMongoModel extends Document {
  id?: string
  email: string
  password: string
}
