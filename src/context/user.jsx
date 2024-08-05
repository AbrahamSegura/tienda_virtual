import { createContext, useState } from 'react'

export const UserContex = createContext()

export function UserProvider({ children }) {
  const user = window.localStorage.getItem("token")
  let inicialToken = undefined
  if(user) inicialToken = user
  const [token, setToken] = useState(inicialToken)
  return (
    <UserContex.Provider value={{
      token,
      setToken
    }}
    >
      {children}
    </UserContex.Provider>
  )
}