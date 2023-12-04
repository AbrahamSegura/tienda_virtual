import { Link } from 'wouter'
import styled from 'styled-components'

export function LoginBtn(){
    return(
        <Link href='/login'>
            <Span>
                Iniciar Sesion
            </Span>
        </Link>
    )
}

const Span = styled.span`
    display: flex;
    padding: 10px 5px;
    border: 2px solid;
    border-radius: ${({ theme }) => theme.media.bordeRadius};
    text-align: center;
    color: ${({ theme }) => theme.color.segundary};
    font-weight: 900;
    cursor: pointer;
    box-shadow: ${({ theme }) => theme.shadow.box};
    max-height: 20px;
`
