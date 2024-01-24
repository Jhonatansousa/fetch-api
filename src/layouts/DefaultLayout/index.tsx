import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'

export function DefaultLayout() {
  return (
    <div className="flex flex-col justify-between min-h-screen max-w-full w-full text-slate-50 bg-main-color px-4">
      <div>
        <Header />
        <div className="ml-4">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}
