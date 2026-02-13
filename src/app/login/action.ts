'use server'

import z from 'zod'

import { loginSchema } from '@/schema/login'

export type LoginState = {
  success: boolean
  error: {
    email: string[]
    username: string[]
    password: string[]
  } | null
}

export async function handleLogin(_prevState: LoginState, formData: FormData) {
  const data = {
    email: formData.get('email'),
    username: formData.get('username'),
    password: formData.get('password'),
  }

  const result = loginSchema.safeParse(data)

  if (!result.success) {
    const tree = z.treeifyError(result.error)

    return {
      success: false,
      error: {
        email: tree.properties?.email?.errors ?? [],
        username: tree.properties?.username?.errors ?? [],
        password: tree.properties?.password?.errors ?? [],
      },
    }
  }

  return {
    success: true,
    error: null,
  }
}
