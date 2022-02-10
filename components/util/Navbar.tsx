import { Link } from 'react-scroll'
import { useContext } from 'react'

import { UiContext } from '../../context/UiContext'

const NavBar = () => {
  const mobileNavMenuActive = useContext(UiContext).mobileNavMenuActive
  const toggleMobileNavMenu = useContext(UiContext).toggleMobileNavMenu
  return (
    <nav
      className={`navbar fixed top-0 left-0 z-20 flex w-full items-center justify-center bg-white py-6 lg:px-10 ${
        mobileNavMenuActive ? 'shadow-sm' : ''
      }`}
    >
      <main className="flex-row justify-between">
        <Link
          to="section-landing"
          smooth={true}
          onClick={() => {
            if (mobileNavMenuActive) toggleMobileNavMenu()
          }}
          className="cursor-pointer"
        >
          <div className="left flex flex-row items-center justify-center gap-2 lg:gap-4">
            <img
              src="/assets/logo-full.jpg"
              alt="Site Logo"
              className="h-12 w-12 rounded-full lg:h-20 lg:w-20"
            />
            <span className="header-title-font text-2xl lg:text-3xl">
              PSane Creations
            </span>
          </div>
        </Link>
        {/* Size [lg] Nav Menu*/}
        <div className="right hidden flex-col items-center justify-center text-xl lg:flex lg:flex-row">
          <Link
            to="section-landing"
            smooth={true}
            spy={true}
            className="navbar-link"
            activeClass="navbar-link-active"
          >
            <span>Home</span>
          </Link>
          <Link
            to="section-artWork"
            smooth={true}
            spy={true}
            className="navbar-link"
            activeClass="navbar-link-active"
          >
            <span>Art Work</span>
          </Link>
          <Link
            to="section-exhibitions"
            smooth={true}
            spy={true}
            className="navbar-link"
            activeClass="navbar-link-active"
          >
            <span>Exhibitions</span>
          </Link>
          <Link
            to="section-about"
            smooth={true}
            spy={true}
            className="navbar-link"
            activeClass="navbar-link-active"
          >
            <span>About</span>
          </Link>
        </div>
        {/* Size [mobile] Nav Menu Button*/}
        <button
          onClick={toggleMobileNavMenu}
          className={`mobile-nav-menu flex flex-col items-center justify-center lg:hidden ${
            mobileNavMenuActive
              ? 'rotate-90 gap-2 opacity-90 duration-700'
              : 'gap-1'
          }`}
        >
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </button>
        {/* Size [mobile] Nav Menu*/}
        {mobileNavMenuActive && (
          <div className="fixed top-28 right-0 flex flex-col items-end justify-center gap-4 px-4 text-lg">
            <Link
              to="section-landing"
              smooth={true}
              spy={true}
              className="navbar-link-mobile"
              activeClass="nav-bar-link-active-mobile animate-slideFromLeft"
              onClick={toggleMobileNavMenu}
            >
              <span>Home</span>
            </Link>
            <Link
              to="section-artWork"
              smooth={true}
              spy={true}
              className="navbar-link-mobile"
              activeClass="nav-bar-link-active-mobile animate-slideFromLeft"
              onClick={toggleMobileNavMenu}
            >
              <span>Art Work</span>
            </Link>
            <Link
              to="section-exhibitions"
              smooth={true}
              spy={true}
              className="navbar-link-mobile"
              activeClass="nav-bar-link-active-mobile animate-slideFromLeft"
              onClick={toggleMobileNavMenu}
            >
              <span>Exhibitions</span>
            </Link>
            <Link
              to="section-about"
              smooth={true}
              spy={true}
              className="navbar-link-mobile"
              activeClass="nav-bar-link-active-mobile animate-slideFromLeft"
              onClick={toggleMobileNavMenu}
            >
              <span>About</span>
            </Link>
          </div>
        )}
      </main>
    </nav>
  )
}

export default NavBar
