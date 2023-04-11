import { compare } from 'bcryptjs'
import { describe, expect, it } from 'vitest'
import { RegisterUseCase } from './register'

describe('Register Use Case', async () => {
  it('should hash user password upon registration', async () => {
    const registerUseCase = new RegisterUseCase({
      async findByEmail(email) {
        return null
      },

      async create(data) {
        return {
          id: 'user-1',
          name: data.name,
          email: data.email,
          passwordHash: data.passwordHash,
          createdAt: new Date(),
        }
      },
    })

    const { user } = await registerUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare('123456', user.passwordHash)

    expect(isPasswordCorrectlyHashed).toBe(true)
  })
})
