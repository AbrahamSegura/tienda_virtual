import { useState } from "react"
import { CloseIcon } from "./icons/CloseIcon"
import {
  LoginForm as LG,
  LoginHeader,
  FormInput,
  SendBtn,
  BoxMensaje,
  CloseBtn,
  TextMensaje
} from "../style/login"
import { useUser } from "../hook/useUser"
import { useLocation } from 'wouter'

export function LoginForm() {
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [_location, setLocation] = useLocation()
  const { hadelStorage } = useUser()

  const handelLogin = async evt => {
    evt.preventDefault()
    const allowedEmails = ["gmail.com", "outlook.es", "hotmail"]
    const splited = correo.split("@").at(-1)

    const chorter = password.length > 4
    const longer = password.length < 24
    const b = chorter && longer
    const a = allowedEmails.includes(splited)

    if (a && b) {
      try {
        const response = await fetch("http://localhost:8000/api/user/login", {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ correo, enc_pass: password })
        })
        if (response.ok) {
          setCorreo('')
          setPassword('')
          const res = await response.json()
          hadelStorage({action:"add", res})
          setLocation("/product")
        } else {
          setShow(true)
        }
      } catch (error) {
        setCorreo('')
        setPassword('')
        setShow(true)
      }
    } else {
      setShow(true)
    }
  }
  return (
    <LG className="login">
      <form onSubmit={handelLogin}>
        <LoginHeader htmlFor="form_changer">Entrar a Cuenta</LoginHeader>
        <FormInput type="email" name="correo" placeholder="ejemplo_123@gmail.com" onChange={e => setCorreo(e.target.value)} value={correo} required />
        <FormInput type="password" name="contraseña" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} value={password} required />
        <SendBtn>Entrar</SendBtn>
      </form>
      {
        show ?
          <BoxMensaje>
            <TextMensaje>Usuario o Contraseña incorrecta</TextMensaje>
            <CloseBtn onClick={() => setShow(false)}>
              <CloseIcon />
            </CloseBtn>
          </BoxMensaje>
          : <></>
      }
    </LG>
  )
}
