import z from 'zod'

import {
  EMAIL_ENDS_WITH,
  EMAIL_ERROR,
  PASSWORD_LENGTH_ERROR,
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
  USER_NAME_MIN_LENGTH,
} from '@/constants/login'

export const loginSchema = z.object({
  email: z.email().endsWith(EMAIL_ENDS_WITH, EMAIL_ERROR),
  username: z.string().min(USER_NAME_MIN_LENGTH),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH, PASSWORD_LENGTH_ERROR)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
})
