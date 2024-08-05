import { Chk, FormsConteiner } from "../style/login"
import { SignupForm } from "../components/SingupForm"
import { LoginForm } from "../components/LoginForm"
export function Login() {

  //const { data, error, isLoading } = useSWR("http://localhost/api/user/login")

  return (
    <FormsConteiner>
      <Chk defaultChecked id="form_changer" /> 
      <SignupForm />
      <LoginForm />
    </FormsConteiner>
  )
}
