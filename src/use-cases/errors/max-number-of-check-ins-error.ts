import { AppError } from '@/shared/errors/app-error'

export class MaxNumberOfCheckInsError extends AppError {
  constructor() {
    super('Max number of check-ins reached.', 400)
  }
}
