import React from 'react'

type Props = {
  disabled?: boolean
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

const Button: React.VFC<Props> = React.memo(({ disabled, clickHandler }) => (
  <button
    disabled={disabled}
    onClick={clickHandler}
    className="w-full sm:w-32 text-white bg-indigo-500 border-0 py-2 focus:outline-none hover:bg-indigo-600 rounded text-lg sm:text-base"
  >
    検索
  </button>
))

export default Button
