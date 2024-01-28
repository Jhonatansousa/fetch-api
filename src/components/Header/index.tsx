import { NavLink } from 'react-router-dom'
import { WebhooksLogo } from '@phosphor-icons/react'
// export const Header = () => {
//   return (
//     <nav className="py-4 flex justify-between items-center">
//       <NavLink to="/">
//         <div className="p-4 flex items-center gap-3 hover:text-highlight-color font-bold">
//           <WebhooksLogo size={32} color="#fe7b00" />
//           Fetch API
//         </div>
//       </NavLink>
//       <div>
//         <NavLink
//           className="p-4 font-medium hover:text-highlight-color"
//           to="/frases"
//         >
//           API Frases Aleatórias
//         </NavLink>

//         <NavLink
//           className="p-4 font-medium hover:text-highlight-color"
//           to="/consultar-cep"
//         >
//           API Consultar Cep
//         </NavLink>
//       </div>
//     </nav>
//   )
// }

export const Header = () => {
  return (
    <nav className="py-4 mb-10 flex justify-between items-center shadow-xl">
      <div className="logo">
        <NavLink to="/">
          <div className="p-4 flex items-center gap-3 hover:text-highlight-color font-bold">
            <WebhooksLogo size={32} color="#fe7b00" />
            Fetch API
          </div>
        </NavLink>
      </div>
      {/* <button type="button">
        <div className="w-8 h-1 m-1 rounded-full bg-white"></div>
        <div className="w-8 h-1 m-1 rounded-full bg-white"></div>
        <div className="w-8 h-1 m-1 rounded-full bg-white"></div>
      </button> */}
      <ul className="sm:block md:flex">
        <li>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/frases"
          >
            API Frases Aleatórias
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/consultar-cep"
          >
            API Consultar Cep
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/music-brainz"
          >
            API Music Brainz
          </NavLink>
        </li>
        <li>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/open-weather"
          >
            API OpenWeather
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
