import { useContext } from "react"
import { UserContex } from '../context/user'

export function useUser() {

  const {token, setToken} = useContext(UserContex)

  const hadelStorage = ({ action, res }) => {
    const s = {
      add: () => {
        const user = JSON.stringify(res)
        const encrypToken = btoa(user)
        setToken(encrypToken)
        window.localStorage.setItem("token", encrypToken)
      },
      read: () => {
        if (!token) return token
        const decodeToken = window.atob(token)
        return JSON.parse(decodeToken)
      },
      delete: () => {
        window.localStorage.removeItem("token")
        setToken(undefined)
      }
    }
    return s[action]()
  }
  return { hadelStorage }
}

