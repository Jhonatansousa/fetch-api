import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <div className="justify-between h-screen w-full text-slate-50 bg-main-color px-4">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
