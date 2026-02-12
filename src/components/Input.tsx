interface InputProps {
  type: string
  name: string
  required: boolean
  errors?: string[]
  placeholder?: string
}

export function Input({ type, placeholder, required, errors, name }: InputProps) {
  return (
    <div className="flex-cols flex gap-1">
      <input
        className="rounded-lg border-2 border-gray-200 px-4 py-2 text-gray-900 placeholder:text-gray-300"
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors?.map(error => (
        <span key={error} className="text-red-500">
          {error}
        </span>
      ))}
    </div>
  )
}
