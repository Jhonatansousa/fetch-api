import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Home } from './pages/Home'
import { Frases } from './pages/Frases'
import { ConsultarCep } from './pages/ConsultarCep'
import { MusicBrainz } from './pages/MusicBrainz'
import { OpenWeather } from './pages/OpenWeather'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/frases" element={<Frases />} />
        <Route path="/consultar-cep" element={<ConsultarCep />} />
        <Route path="/music-brainz" element={<MusicBrainz />} />
        <Route path="/open-weather" element={<OpenWeather />} />
      </Route>
    </Routes>
  )
}
