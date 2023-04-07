import fastify from 'fastify'
import { appRoutes } from './http/routes'
import { errorHandler } from './shared/errors/error-handler'

export const app = fastify()

app.register(appRoutes)

app.setErrorHandler(errorHandler)
