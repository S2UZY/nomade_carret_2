'use client'

import { useFormStatus } from 'react-dom'

export function FormButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="rounded bg-blue-300 p-2 text-white disabled:bg-gray-300"
      disabled={pending}
    >
      Log in
    </button>
  )
}
