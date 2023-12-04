import icono from '../assets/icono.png'
import styled from "styled-components"
import { Link } from "wouter"

export function HomeBtn() {
  return (
    <Link href="/">
      <Span>
        <img src={icono} alt="facitodo icon" width='50' height='40' />
      </Span>
    </Link>
  )
}

const Span = styled.span`
  display: flex;
  place-content: center;
  min-width: 10%;
  height: 45px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-radius: ${({ theme }) => theme.media.bordeRadius};
  user-select: none;
  cursor: pointer;
  @media(max-width: ${({ theme }) => theme.media.PHONE}){
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.color.segundary};
    position: fixed;
    right: 1.5rem;
    transform: scale(1.5);
    top: 90vh;
}
  }
`
