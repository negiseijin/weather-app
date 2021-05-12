import React, { LegacyRef } from 'react'

import Button from '@/components/atoms/Button'
import Input from '@/components/atoms/Input'

type Props = {
  disabled: boolean
  value: LegacyRef<HTMLInputElement>
  clickHandler: (event: React.MouseEvent<HTMLButtonElement>) => Promise<void>
}

const Search: React.VFC<Props> = React.memo(
  ({ value, disabled, clickHandler }) => (
    <div className="flex-none sm:flex w-full justify-start lg:justify-center items-center">
      <div className="relative mr-4 w-full mb-4 sm:mb-0">
        <Input value={value} disabled={disabled} />
      </div>
      <Button disabled={disabled} clickHandler={clickHandler} />
    </div>
  )
)

export default Search
