import NavBar from '../util/Navbar'

type LayoutProps = {
  children: React.ReactElement | React.ReactElement[]
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="h-screen w-screen">
      <NavBar />
      {children}
    </div>
  )
}

export default Layout
