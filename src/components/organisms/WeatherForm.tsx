import React, { useCallback, useRef, useState } from 'react'

import Search from '@/components/molecules/Search'
import { Weather } from '@/types/weather'
import { OPEN_WEATHER_API_URL } from '@/utils/constants'

const WeatherForm: React.VFC = React.memo(() => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const inputEl = useRef<HTMLInputElement>(null)

  const [main, setmMain] = useState<Weather>()

  const clickHandler = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        e.preventDefault()
        setDisabled(true)
        const res = await fetch(
          `${OPEN_WEATHER_API_URL}${inputEl.current?.value}&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        const json = await res.json()
        // eslint-disable-next-line no-console
        console.log(json)

        setmMain(json)

        return json
      } catch (error) {
        console.error(error)
      } finally {
        setDisabled(false)
      }
    },
    [Search]
  )

  return (
    <>
      <Search disabled={disabled} value={inputEl} clickHandler={clickHandler} />
      <pre>{JSON.stringify(main, null, 4)}</pre>
    </>
  )
})

export default WeatherForm
