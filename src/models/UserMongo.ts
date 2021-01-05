import { Schema, Model, model } from 'mongoose'
import { IUserMongoModel } from '@interfaces/IUser'
import bcrypt from 'bcrypt'

const userOptions = {
  timestamps: true
}

const UserSchema: Schema<IUserMongoModel> = new Schema(
  {
    id: {
      type: String,
      unique: true,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      minlength: 6,
      required: true,
      select: false
    }
  },
  userOptions
)

UserSchema.pre<IUserMongoModel>('save', async function () {
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const UserMongoSchema: Model<IUserMongoModel> = model<IUserMongoModel>('User', UserSchema)

export { UserMongoSchema }
