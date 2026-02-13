'use client'

import { useActionState } from 'react'

import { Input } from '@/components'
import { FormButton } from '@/components/FormButton'

import { handleLogin } from './action'

export default function Login() {
  const [state, formAction] = useActionState(handleLogin, {
    success: false,
    error: {
      email: [],
      username: [],
      password: [],
    },
  })

  return (
    <div>
      <form className="flex flex-col gap-2" action={formAction}>
        <Input type="text" name="email" placeholder="이메일" errors={state.error?.email} required />
        <Input
          type="text"
          name="username"
          placeholder="유저이름"
          errors={state.error?.username}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder="비밀번호"
          errors={state.error?.password}
          required
        />
        <FormButton />
      </form>
    </div>
  )
}
