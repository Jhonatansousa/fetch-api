import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

interface Weather {
  name: string | null
  country: string | null
  description: string | null
  temperature: number | null
  feelsLike: number | null
}

export const OpenWeather = () => {
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
  }

  const getGeocode = async () => {
    const geocodingURL = `http://api.openweathermap.org/geo/1.0/direct?q=${countryName}&appid=${APIkey}`

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
  }

  useEffect(() => {
    if (lat && lon) {
      getWeather()
    }
  }, [lat, lon])

  return (
    <div>
      <h1>openWeather page</h1>

      <form className="mt-2" onSubmit={handleSearchCountry}>
        <input
          className="p-2 text-black rounded-md focus:outline-highlight-color outline-none border-0"
          type="text"
          name="cep"
          placeholder="Buscar Cidade"
          value={countryName}
          onChange={handleChange}
        />
        <button
          className="ml-2 p-2 w-fit font-medium transition rounded-lg border border-transparent bg-btn-color hover:border-violet-700 active:bg-violet-900 active:scale-95"
          type="submit"
        >
          Buscar
        </button>
      </form>

      <div>
        <div>
          {weather && (
            <div className="weather-info">
              <h2>
                {weather.name}, {weather.country}
              </h2>
              <p>Descrição: {weather.description}</p>
              <p>Temperatura: {weather.temperature}°C</p>
              <p>Sensação térmica: {weather.feelsLike}°C</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
