import { Link } from "wouter"
import styled from "styled-components"


export const CardList = styled.ul`
    display: grid;
    grid-template-columns: repeat(
      auto-fit,
      minmax(
        250px,
        1fr
      )
    );
    gap: 2em;
    width: 100%;
`
export const Cards = styled.li`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.box};
    border-radius: 15px;
    overflow: hidden;
    padding: 1rem;
    position: relative;
    display: flex;
    transition: .15s ease-in;
    flex-direction: column;
    width: 220px;
    height: 380px;
    margin: auto;

    &:hover,
    &:focus-within {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.color.shadowPrimary}, 0 10px 60px 0 #0001;
        transform: translatey(-5px);
    }
`
export const Img = styled.img`
    max-width: 100%;
    display: block;
    object-fit: contain;
    object-position: top;
`

export const CardImage = styled.figure`
    border-radius: 10px;
    overflow: hidden;
`
export const CardHeader = styled.div`
    margin-top: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TitleProduct = styled.h2`
    font-weight: 600;
    line-height: 1.25;
    padding-right: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.color.primary};
    will-change: transform;

    &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
    }
`

export const LikeBtn = styled.button`
    border: 0;
    background-color: #fff;
    border-radius: 50%;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    font-size: 1.25rem;
    transition: .25s ease;
    box-shadow: 0 0 0 1px #0005, 0 3px 8px 0 #0002;
    z-index: 1;
    cursor: pointer;
    color: #565656;

    &:hover,
    &:focus {
        background-color: ${({ theme }) => theme.color.shadowRed};
        color: #FFF;
    }
`

export const Information = styled.span`
    display: block;
    padding: 2.5px 0;
    font-size: 18px;
`

export const PriceRef = styled(Information)`
    color: ${({ theme }) => theme.color.grey};
    font-size: 16px;
    `

export const CardFooter = styled.div`
    padding: 5px 0;
`

export const Form = styled.form`
    display: flex;
    justify-content: space-between;
    height: 30px;
`

export const SoldBtn = styled.button`
    width: 60%;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.primary};
    border: 2px solid ${({ theme }) => theme.color.white};
    border-radius: 10px;
    font-weight: 700;
    box-shadow: ${({ theme }) => theme.shadow.box};
    cursor: pointer;
    
    &:hover{
        filter: brightness(1.5);
    }
    &:active{
        background-color: ${({ theme}) => theme.color.segundary};
        filter: brightness(1);
    }
`
export const InputForm = styled.input.attrs({type: "button"})`
    width: 12.5%;
    background-color: ${({ theme }) => theme.color.segundary};
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 10px;
    font-size: 17px;
    font-weight: 600;
    box-shadow: ${({ theme }) => theme.shadow.box};
    cursor: pointer;

    &:hover{
        filter: brightness(1.5);
    }
    &:active{
        background-color: ${({ theme}) => theme.color.primary};
        filter: brightness(1);
    }
`

export const ContCantidad = styled.span`
    font-size: 28px;
    font-weight: 700;
    cursor: default;
`
