import bcrypt from 'bcrypt'

const hashNewPassword = async (newPassword: string) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(newPassword, salt)
}

export { hashNewPassword }
