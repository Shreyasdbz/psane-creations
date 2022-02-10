import { useState, createContext } from 'react'

type UiContextType = {
  mobileNavMenuActive: boolean
  modalActive: boolean
  toggleMobileNavMenu: () => void
}
export const UiContext = createContext({} as UiContextType)

type UiContextProviderProps = {
  children: React.ReactElement | React.ReactElement[]
}

export const UiContextProvider = ({ children }: UiContextProviderProps) => {
  const [mobileNavMenuActive, setMobileNavMenuActive] = useState<boolean>(false)
  const [modalActive, setModalActive] = useState<boolean>(false)

  function toggleMobileNavMenu() {
    setMobileNavMenuActive(!mobileNavMenuActive)
  }

  return (
    <UiContext.Provider
      value={{ mobileNavMenuActive, modalActive, toggleMobileNavMenu }}
    >
      {children}
    </UiContext.Provider>
  )
}
