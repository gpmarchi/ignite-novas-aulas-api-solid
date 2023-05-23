import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'
import { usersRoutes } from './http/controllers/users/routes'
import { errorHandler } from './shared/errors/error-handler'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(usersRoutes)

app.setErrorHandler(errorHandler)
