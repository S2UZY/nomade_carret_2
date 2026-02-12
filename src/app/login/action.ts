'use server'

import { headers } from 'next/headers'

export type LoginState = { success: boolean; message: string }

export async function handleLogin(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password')
  const headersList = await headers()
  const host = headersList.get('host') ?? 'localhost:3000'
  const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
  const baseUrl = `${protocol}://${host}`

  const response = await fetch(`${baseUrl}/www/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password }),
  })

  const data = await response.json().catch(() => ({ message: '요청을 처리할 수 없습니다.' }))

  if (response.status === 200) {
    return { success: true, message: '로그인 성공' }
  }

  return { success: false, message: data.message ?? '로그인 실패' }
}
