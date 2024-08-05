import { useState } from "react"
import styled from "styled-components"

export function FormBuy() {
  const [pago, setPago] = useState(true)
  return (
    <Section>
      <TypePagoBtn onClick={() => setPago(!pago)}>
        {
          pago
            ? "Pago Movil"
            : "Pago en Local"
        }
      </TypePagoBtn>
      {
        pago
          ? <Form>
            <h2>Datos</h2>
            <FormInput type="number" placeholder="Cedula del Pago movil" />
            <FormInput type="number" placeholder="Referencia" />
            <FormInput type="text" placeholder="Banco" />
            <FormInput type="text" placeholder="Telefono" />
            <SeldBtn>Comprar</SeldBtn>
          </Form>
          : <TypePagoBtn>Solicitar Referencia</TypePagoBtn>
      }
    </Section>
  )
}

const Section = styled.section`
display: flex;
flex-direction: column;
height: 90vh;
align-items: center;
justify-content: space-around;
`
const TypePagoBtn = styled.button`
  display: flex;
  width: 150px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  border: 2px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  border-radius: 15px;
  box-shadow: ${({ theme }) => theme.shadow.box};
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 70%;
  background: linear-gradient(to bottom, ${({ theme }) => theme.color.shadowPrimary}, ${({ theme }) => theme.color.shadowSegundary});
  border-radius: 15px;
  align-items: center;
  justify-content: center;
`

export const FormInput = styled.input`
    width: 60%;
    height: 20px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    margin: 10px auto;
    padding: 10px;
    border: none;
    outline: none;
    border-radius: ${({ theme }) => theme.media.bordeRadius};
    box-shadow: ${({ theme }) => theme.shadow.box};  
`

export const SeldBtn = styled.button`
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