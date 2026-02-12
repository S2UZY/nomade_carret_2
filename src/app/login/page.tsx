'use client'

import { useActionState } from 'react'

import { Input } from '@/components'
import { FormButton } from '@/components/FormButton'

import { handleLogin } from './action'

export default function Login() {
  const [state, formAction] = useActionState(handleLogin, {
    success: false,
    message: '',
  })

  return (
    <div>
      <form className="flex flex-col gap-2" action={formAction}>
        <Input type="text" name="email" placeholder="이메일" required />
        <Input type="text" name="username" placeholder="유저이름" required />
        <Input type="password" name="password" placeholder="비밀번호" required />
        <FormButton />
        {state.message && (
          <p
            className={
              state.success
                ? 'rounded bg-green-100 p-2 text-green-800'
                : 'rounded bg-red-100 p-2 text-red-800'
            }
          >
            {state.message}
          </p>
        )}
      </form>
    </div>
  )
}
