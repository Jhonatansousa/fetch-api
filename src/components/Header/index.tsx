import { NavLink } from 'react-router-dom'
import { WebhooksLogo } from '@phosphor-icons/react'
import { useState } from 'react'

interface HeaderProps {
  statusMenu: (isActive: boolean) => void
}

export const Header = (props: HeaderProps) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  // const handleCloseMenu = () => {
  //   setIsActiveMenu(false)
  // }

  const handleToggleMenu = () => {
    setIsActiveMenu(!isActiveMenu)
    props.statusMenu(!isActiveMenu)
  }
  const activedMenuStyle =
    'top-24 opacity-100 bg-menu-bg py-10 bg-opacity-45 flex-col absolute gap-10 z-50 transition-all duration-300'
  const disabledMenuStyle =
    'top-24 py-10 flex-col invisible absolute gap-10 opacity-0  duration-300'
  return (
    <nav className="py-4 mb-10 flex justify-between items-center shadow-xl relative">
      <NavLink to="/">
        <div className="p-4 flex items-center gap-3 hover:text-highlight-color font-bold">
          <WebhooksLogo size={32} color="#fe7b00" />
          Fetch API
        </div>
      </NavLink>

      <button
        className="lg:hidden *:hover:bg-highlight-color *:active:bg-[#ffbc7e] *:active:scale-90"
        onClick={handleToggleMenu}
        type="button"
      >
        <div
          className={`${isActiveMenu ? 'translate-y-1 rotate-45' : 'sd'} w-8 h-1 m-1 transition-all rounded-full bg-white`}
        ></div>
        <div
          className={`${isActiveMenu && 'hidden'} w-8 h-1 m-1 transition-all rounded-full bg-white`}
        ></div>
        <div
          className={`${isActiveMenu ? '-translate-y-1 -rotate-45' : ''} w-8 h-1 m-1 transition-all rounded-full bg-white`}
        ></div>
      </button>
      <ul
        className={`${isActiveMenu ? activedMenuStyle : disabledMenuStyle} lg:items-center lg:flex-row text-center  lg:visible lg:opacity-100 lg:static flex w-full  lg:w-auto lg:py-0 lg:pl-0`}
      >
        <li onClick={handleToggleMenu}>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/frases"
          >
            API Frases Aleatórias
          </NavLink>
        </li>
        <li onClick={handleToggleMenu}>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/consultar-cep"
          >
            API Consultar Cep
          </NavLink>
        </li>
        <li onClick={handleToggleMenu}>
          <NavLink
            className="p-4 font-medium hover:text-highlight-color"
            to="/music-brainz"
          >
            API Music Brainz
          </NavLink>
        </li>
        <li onClick={handleToggleMenu}>
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
