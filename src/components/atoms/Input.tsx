import React, { LegacyRef } from 'react'

type Props = {
  value: LegacyRef<HTMLInputElement>
  disabled: boolean
}

const Input: React.VFC<Props> = React.memo(({ value, disabled }) => (
  <input
    type="text"
    placeholder="例）東京"
    ref={value}
    disabled={disabled}
    className="w-full px-3 py-1 text-base text-gray-700 bg-white border border-gray-300 rounded outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 leading-8 transition-colors duration-200 ease-in-out"
  />
))

export default Input
