import { useState } from "react"
import { LoginForm as LG, LoginHeader, FormInput, SendBtn } from "../style/login"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelLogin = async evt => {
    evt.preventDefault()
    //const enc_pass = btoa(password)
    const response = await fetch("http://localhost:8000/api/user/login", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, enc_pass: password })
    })
    if (response.ok) {
      setEmail('');
      setPassword('');
      console.log(response.json())
    }
  }
  console.log(email, password);
  return (
    <LG className="login">
      <form onSubmit={handelLogin}>
        <LoginHeader htmlFor="form_changer">Entrar a Cuenta</LoginHeader>
        <FormInput type="email" name="correo" placeholder="ejemplo_123@gmail.com" onChange={e => setEmail(e.target.value)} value={email} required />
        <FormInput type="password" name="contraseña" placeholder="Contraseña" onChange={e => setPassword(e.target.value)} value={password} required />
        <SendBtn>Entrar</SendBtn>
      </form>
    </LG>
  )
}