import styled from "styled-components"

export const FormsConteiner = styled.section`
    width: 450px;
    height: 700px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.color.primary}, ${({ theme }) => theme.color.segundary});
    overflow: hidden;
    border: 2px solid ${({ theme }) => theme.color.shadowPrimary};
    border-radius: ${({ theme }) => theme.media.bordeRadius};
    box-shadow: ${({ theme }) => theme.shadow.box};
    margin: auto;
`

export const Chk = styled.input.attrs({ type: "checkbox" })`
    display: none;
`

export const Signup = styled.article`
    position: relative;
    width: 100%;
    height: 100%;
`

export const Header = styled.label`
    color: ${({ theme }) => theme.color.white};
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;

    `

export const FormInput = styled.input`
    width: 60%;
    height: 20px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    margin: 20px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: ${({ theme }) => theme.media.bordeRadius};
    box-shadow: ${({ theme }) => theme.shadow.box};
   
`

export const SendBtn = styled.button`
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.color.segundary};
    background-color: ${({ theme }) => theme.color.white};
    border: 2px solid ${({ theme }) => theme.color.shadowPrimary};
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    box-shadow: ${({ theme }) => theme.shadow.box};
    transition: .2s ease-in;  
    cursor: pointer;

    &:hover{
      filter: brightness(.95);
    }
`


export const LoginForm = styled.article`
    height: 615px;
    background: linear-gradient(to bottom, ${({ theme }) => theme.color.shadowPrimary}, ${({ theme }) => theme.color.shadowSegundary});
    border-radius: 60% / 10%;
    transform: translateY(-200px);
    transition: .8s ease-in-out;
`

export const LoginHeader = styled(Header)`
  transform: scale(.6);
`
export const Permiso = styled.div`
  font-size: 18px;
  display: flex;
  color: ${({ theme }) => theme.color.white};
  justify-content: space-evenly;
  font-weight: 900;
  text-shadow: ${({ theme }) => theme.shadow.text};

  && input{
    width: 25px;
  }
`
export const BoxMensaje = styled.div`
  text-align: center;
  margin: auto;
  margin-top: 50px;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  flex-direction: column;
  position: relative;
  width: 50%;
  padding: 20px;
  border-radius: ${({ theme }) => theme.media.bordeRadius};
  box-shadow: ${({ theme }) => theme.shadow.box};
  transition: .5s ease-in;
  `
export const TextMensaje = styled.span`
  color: ${({ theme }) => theme.color.red};
  font-size: 20px;
  font-weight: 700;
  text-shadow: ${({ theme }) => theme.shadow.text};
`
export const CloseBtn = styled.span`
  position: absolute;
  right: -10px;
  font-size: 25px;
  top: -15px;
`