import { Column, Entity, PrimaryColumn, BeforeInsert } from 'typeorm'
import bcrypt from 'bcrypt'

@Entity('users')
class UserOracle {
  @PrimaryColumn({ type: 'varchar', unique: true })
  id: string

  @Column({ type: 'varchar', length: 50 })
  email: string

  @Column({ type: 'varchar', length: 50 })
  password: string

  @BeforeInsert()
  async hashPassword () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
  }

  constructor (props: Partial<UserOracle>) {
    Object.assign(this, props)
  }
}

export { UserOracle }
