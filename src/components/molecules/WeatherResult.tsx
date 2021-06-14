import { fromUnixTime } from 'date-fns'
import React from 'react'

import { Weather } from '@/types/weather'

type Props = {
  weather: Weather
}

const WeatherResult: React.VFC<Props> = React.memo(({ weather }: Props) => {
  return (
    <div className="p-4">
      <div className="relative h-56 m-auto text-white rounded-lg shadow-2xl bg-gradient-to-bl from-cyan-300 to-blue-700 w-96 hover:scale-110 transition-transform">
        <div className="absolute w-full px-8 top-6">
          <div className="flex justify-between">
            <div>
              <p className="font-light">City Name</p>
              <p className="text-lg font-medium tracking-widest">
                {weather.name}
              </p>
            </div>
            <div>
              <img
                alt={weather.weather[0].description}
                src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
              />
            </div>
          </div>
          <div className="pt-2">
            <p className="font-light">Weather Condition</p>
            <p className="text-lg font-medium tracking-widest">
              {weather.weather[0].main}
            </p>
          </div>
          <div className="pt-6 pr-6">
            <div className="flex justify-between">
              <div>
                <p className="text-xs font-light">Date</p>
                <p className="text-sm font-bold tracking-more-wider">
                  {fromUnixTime(weather.dt).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-xs font-light">Temprature</p>
                <p className="text-sm font-bold tracking-more-wider">
                  {weather.main.temp}°C
                </p>
              </div>
              <div>
                <p className="text-xs font-light">Humidity</p>
                <p className="text-sm font-bold tracking-more-wider">
                  {weather.main.humidity}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default WeatherResult
