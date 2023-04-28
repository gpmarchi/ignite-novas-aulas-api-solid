import { AppError } from '@/shared/errors/app-error'

export class MaxDistanceError extends AppError {
  constructor() {
    super('You are out of the valid range.', 400)
  }
}
