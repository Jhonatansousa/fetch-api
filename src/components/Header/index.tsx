import { NavLink } from 'react-router-dom'
import { WebhooksLogo } from '@phosphor-icons/react'
export const Header = () => {
  return (
    <nav className="py-4 flex justify-between items-center">
      <NavLink to="/">
        <div className="p-4 flex items-center gap-3 hover:text-highlight-color font-bold">
          <WebhooksLogo size={32} color="#fe7b00" />
          Fetch API
        </div>
      </NavLink>
      <div>
        <NavLink
          className="p-4 font-medium hover:text-highlight-color"
          to="/frases"
        >
          API Frases Aleatórias
        </NavLink>

        <NavLink
          className="p-4 font-medium hover:text-highlight-color"
          to="/consultar-cep"
        >
          API Consultar Cep
        </NavLink>
      </div>
    </nav>
  )
}

/* menu hamburguer responsivo para fazer
export const Header = () => {
  return (
    <nav>
      <div className="logo"></div>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </nav>
  )
}
asdasds
asdasd
*/
