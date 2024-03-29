import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { CircleNotch } from '@phosphor-icons/react'

interface Weather {
  name: string | null
  country: string | null
  description: string | null
  temperature: number | null
  feelsLike: number | null
}

export const OpenWeather = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [countryName, setCountryName] = useState('')
  const [lat, setLat] = useState('')
  const [lon, setLon] = useState('')
  const [weather, setWeather] = useState<Weather>({
    name: null,
    country: null,
    description: null,
    temperature: null,
    feelsLike: null,
  })
  const APIkey = '414a4c919e871bca5f9c5ad816184c83'

  const getWeather = async () => {
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt&appid=${APIkey}&units=metric`

    const response = await fetch(weatherURL, {
      method: 'GET',
    })

    const data = await response.json()

    setWeather({
      name: data.name,
      country: data.sys.country,
      description: data.weather[0].description,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
    })

    console.log(data)
    setIsLoading(false)
  }

  const getGeocode = async () => {
    const geocodingURL = `https://api.openweathermap.org/geo/1.0/direct?q=${countryName}&appid=${APIkey}`

    const response = await fetch(geocodingURL, {
      method: 'GET',
    })

    const data = await response.json()
    setLat(data[0].lat)
    setLon(data[0].lon)

    console.log(data)
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newCountryName = event.target.value
    setCountryName(newCountryName)
    console.log(countryName)
  }

  function handleSearchCountry(event: FormEvent) {
    event.preventDefault()
    getGeocode()
    setCountryName('')
    setIsLoading(true)
  }

  useEffect(() => {
    if (lat && lon) {
      getWeather()
    }
  }, [lat, lon])

  return (
    <div>
      <h1 className="text-3xl font-medium">API - Informações Meteorológicas</h1>
      <h4>
        Digite abaixo o local e clique em buscar para receber informações
        meteorológicas.{' '}
      </h4>

      <form className="mt-5" onSubmit={handleSearchCountry}>
        <input
          className="p-2 text-black rounded-md focus:outline-highlight-color outline-none border-0"
          type="text"
          pattern="^[a-zA-ZÀ-ú ]+$"
          name="cep"
          placeholder="Buscar Cidade"
          value={countryName}
          onChange={handleChange}
        />
        <button
          className="ml-2 p-2 w-fit font-medium transition rounded-lg border border-transparent bg-btn-color hover:border-violet-700 active:bg-violet-900 active:scale-95 disabled:cursor-not-allowed disabled:opacity-25 disabled:border-none disabled:active:bg-btn-color disabled:active:scale-100"
          type="submit"
          disabled={countryName.length === 0}
        >
          Buscar
        </button>
      </form>

      <div>
        <div className="mt-5">
          {isLoading && (
            <div>
              <CircleNotch className="animate-spin" size={32} color="#d76f0f" />
            </div>
          )}
          {weather.name !== null && (
            <div className="weather-info">
              <h2 className="text-highlight-color font-medium">
                {weather.name} - {weather.country}
              </h2>
              <p className="font-medium">
                <span className="text-highlight-color">Tempo:</span>{' '}
                {weather.description}
              </p>
              <p className="font-medium">
                <span className="text-highlight-color">Temperatura:</span>{' '}
                {weather.temperature}°C
              </p>
              <p className="font-medium">
                <span className="text-highlight-color">Sensação térmica:</span>{' '}
                {weather.feelsLike}°C
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
