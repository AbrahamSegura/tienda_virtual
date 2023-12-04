import { Signup, Header, FormInput, SendBtn} from "../style/login"

export function SignupForm(){
    return(
        <Signup className="signup">
        <form>
          <Header htmlFor="form_changer">Registrar</Header>
          <FormInput type="text" name="nombre_completo" placeholder="Fulanito Peres" required />
          <FormInput type="number" name="cedula" placeholder="V-12345678" required />
          <FormInput type="email" name="correo" placeholder="ejemplo_123@gmail.com" required />
          <FormInput type="text" name="ubicacion" placeholder="Ubicacion (Maracay, Cagua)" />
          <FormInput type="password" name="contraseña" placeholder="Contraseña" required />
          <FormInput type="password" name="confirmar" placeholder="Confirmar Contraseña" required />
          <div>
            <label htmlFor="permiso_crear">¿Esta deacuerdo con suministrar estos datos?</label>
            <input type="checkbox" id="permiso_crear" required />
          </div>
          <SendBtn>Registrar</SendBtn>
        </form>
      </Signup>
    )
}