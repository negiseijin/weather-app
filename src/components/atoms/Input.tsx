import React from 'react'

type Props = {
  disabled?: boolean
  value?: string
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.VFC<Props> = React.memo(
  ({ disabled, value, inputHandler }) => (
    <input
      type="text"
      placeholder="例）東京"
      value={value}
      defaultValue=""
      disabled={disabled}
      onChange={inputHandler}
      className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
    />
  )
)

export default Input
