import { v4 } from 'uuid'

class User {
  public readonly id: string
  public email: string
  public password: string

  constructor (props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props)

    if (!id) {
      this.id = v4()
    }
  }
}

export { User }
