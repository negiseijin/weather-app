import React from 'react'

import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

type Props = {
  disabled?: boolean
  value?: string
  inputHandler?: (event: React.ChangeEvent<HTMLInputElement>) => void
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Search: React.VFC<Props> = React.memo(
  ({ disabled, value, inputHandler, clickHandler }) => (
    <div className="flex-none sm:flex w-full justify-start lg:justify-center items-center">
      <div className="relative mr-4 w-full sm:w-3/4 mb-4 sm:mb-0">
        <Input disabled={disabled} value={value} inputHandler={inputHandler} />
      </div>
      <Button disabled={disabled} clickHandler={clickHandler} />
    </div>
  )
)

export default Search
