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
          `${OPEN_WEATHER_API_URL}${inputEl.current?.value}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`
        )
        const json = await res.json()
        setmMain(json)
      } catch (error) {
        setmMain(undefined)
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
      {main?.cod === 200 && (
        <div className="flex flex-wrap -m-2">
          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img
                alt={main?.weather[0].main}
                className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                src={`https://openweathermap.org/img/wn/${main?.weather[0].icon}@2x.png`}
              />
              <div className="flex-grow mr-4">
                <h2 className="text-gray-900 title-font font-medium">
                  {`${main?.main.temp.toFixed(1)}℃`}
                </h2>
                <p className="text-gray-500">{main?.name}</p>
              </div>
              <div className="flex justify-center mr-4">
                <dl className="flex flex-col">
                  <div className="flex items-center">
                    <dt>最高気温：</dt>
                    <dt>{`${main?.main.temp_max.toFixed(1)}℃`}</dt>
                  </div>
                  <div className="flex items-center">
                    <dt>最低気温：</dt>
                    <dt>{`${main?.main.temp_min.toFixed(1)}℃`}</dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}

      <pre>{JSON.stringify(main, null, 4)}</pre>
    </>
  )
})

export default WeatherForm
