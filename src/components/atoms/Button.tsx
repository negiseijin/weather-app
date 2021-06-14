import React from 'react'

type Props = {
  disabled?: boolean
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

const Button: React.VFC<Props> = React.memo(({ disabled, clickHandler }) => (
  <button
    disabled={disabled}
    onClick={clickHandler}
    className="w-full py-2 text-lg text-white bg-indigo-500 border-0 rounded sm:w-32 focus:outline-none hover:bg-indigo-600 sm:text-base"
  >
    検索
  </button>
))

export default Button
