import { AuthContext } from "../contexts/AuthContext"
import { useContext } from "react"

// allows to use context and checks if this context is used inside the children elements of provider or not.
export const useAuthContext = () => {
  const context = useContext(AuthContext)

  if(!context) {
    throw Error('useAuthContext must be used inside an AuthContextProvider')
  }

  return context
}