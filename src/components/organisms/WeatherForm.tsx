import React, { useCallback, useRef, useState } from 'react'

import Search from '@/components/molecules/Search'
import WeatherResult from '@/components/molecules/WeatherResult'
import { Weather } from '@/types/weather'
import { OPEN_WEATHER_API_URL } from '@/utils/constants'

const WeatherForm: React.VFC = React.memo(() => {
  const [disabled, setDisabled] = useState<boolean>(false)
  const inputEl = useRef<HTMLInputElement>(null)

  const [weather, setWeather] = useState<Weather>()

  const clickHandler = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      try {
        e.preventDefault()
        setDisabled(true)
        const res = await fetch(
          `${OPEN_WEATHER_API_URL}${inputEl.current?.value}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        const json = await res.json()
        setWeather(json)
      } catch (error) {
        setWeather(undefined)
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
      {weather?.cod === 200 && <WeatherResult weather={weather} />}
      {weather?.cod === 400 && <p>見つかりませんでした</p>}
    </>
  )
})

export default WeatherForm
