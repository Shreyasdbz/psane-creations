import { useState, useEffect } from 'react'
import NavBar from '../util/Navbar'

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[]
}
const Layout = ({ children }: LayoutProps) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  function handleScroll() {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className="relative min-h-screen w-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/assets/blurCirclesBg.svg)' }}
    >
      <NavBar scrolled={scrollPosition === 0 ? false : true} />
      {children}
    </div>
  )
}

export default Layout
