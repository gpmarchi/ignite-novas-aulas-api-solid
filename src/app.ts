import fastifyJwt from '@fastify/jwt'
import fastify from 'fastify'
import { env } from './env'
import { checkInsRoutes } from './http/controllers/check-ins/routes'
import { gymsRoutes } from './http/controllers/gyms/route'
import { usersRoutes } from './http/controllers/users/routes'
import { errorHandler } from './shared/errors/error-handler'

export const app = fastify()

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
})

app.register(usersRoutes)
app.register(gymsRoutes)
app.register(checkInsRoutes)

app.setErrorHandler(errorHandler)
