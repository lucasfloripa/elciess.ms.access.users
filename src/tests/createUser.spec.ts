
class User {
  email: string
  password: string

  constructor (props: Partial<User>) {
    Object.assign(this, props)
  }
}

interface IUserModel {
  email: string
  password: string
}

interface IRepositoryResponse {
  status: string
  message: string
  user?: User
}

interface IUserRepository {
  create(newUserModel: IUserModel): IRepositoryResponse
  findUserByEmail(email: string): IRepositoryResponse
}

interface ICreateUserRequestDTO {
  email: string
  password: string
}

const fakeRepositoryArr: Array<User> = [
  { email: 'juceliog@gmail.com', password: '123123' }
]

class FakeRepository implements IUserRepository {
  create (createUserModel: IUserModel): IRepositoryResponse {
    const user = new User(createUserModel)
    fakeRepositoryArr.push(user)
    return { status: 'success', message: 'user created', user }
  }

  findUserByEmail (email: string): IRepositoryResponse {
    const user = fakeRepositoryArr.find(user => user.email === email)

    if (!user) {
      return { status: 'fail', message: `User with email ${email} not found` }
    }

    return { status: 'success', message: `User with email ${email} found!`, user }
  }
}

class CreateUserUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private userRepository: IUserRepository) { }

  execute (createUserRequestDTO: ICreateUserRequestDTO) {
    const { email, password } = createUserRequestDTO

    if (!email) {
      return { status: 'fail', statusCode: 400, error: 'Insert e-mail.' }
    }

    if (!password) {
      return { status: 'fail', statusCode: 400, error: 'Insert password.' }
    }

    const findUserByEmailResponse = this.userRepository.findUserByEmail(email)

    if (findUserByEmailResponse.user) {
      return { status: 'fail', message: 'Duplicate Email' }
    }

    const user = new User(createUserRequestDTO)

    const createUserResponse = this.userRepository.create(user)

    let token: string

    if (createUserResponse.status === 'success') {
      token = createUserResponse.user.email
    }

    return { ...createUserResponse, token }
  }
}

describe('CreateUserUseCase', () => {
  test('Should user inform valid data', () => {
    const fakeRepository = new FakeRepository()
    const createUserUseCase = new CreateUserUseCase(fakeRepository)

    const createUserResponse = createUserUseCase.execute({
      email: 'lucasg@gmail.com',
      password: '123123'
    })

    console.log(createUserResponse)

    expect(createUserResponse.status).toBe('success')
  })

  test('Should user inform invalid data', () => {
    const fakeRepository = new FakeRepository()
    const createUserUseCase = new CreateUserUseCase(fakeRepository)

    const createUserResponse = createUserUseCase.execute({
      email: '',
      password: '123123'
    })

    console.log(createUserResponse)

    expect(createUserResponse.status).toBe('fail')
  })

  test('Should user inform duplicated email', () => {
    const fakeRepository = new FakeRepository()
    const createUserUseCase = new CreateUserUseCase(fakeRepository)

    const createUserResponse = createUserUseCase.execute({
      email: 'juceliog@gmail.com',
      password: '123123'
    })

    console.log(createUserResponse)

    expect(createUserResponse.status).toBe('fail')
  })
})
