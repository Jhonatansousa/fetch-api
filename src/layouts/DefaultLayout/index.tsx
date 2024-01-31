import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

export function DefaultLayout() {
  const [isActiveMenu, setIsActiveMenu] = useState(false)

  const handleMenuStatus = (isActive: boolean) => {
    setIsActiveMenu(isActive)
  }
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-full w-full text-slate-50 bg-main-color px-4">
      <div>
        <Header statusMenu={handleMenuStatus} />
        <div
          className={`${isActiveMenu && 'sm:blur md:blur lg:blur-none'} ml-4`}
        >
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
