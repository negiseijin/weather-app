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
    <div className="items-center justify-start flex-none w-full sm:flex lg:justify-center">
      <div className="relative w-full mb-4 mr-4 sm:mb-0">
        <Input value={value} disabled={disabled} />
      </div>
      <Button disabled={disabled} clickHandler={clickHandler} />
    </div>
  )
)

export default Search
