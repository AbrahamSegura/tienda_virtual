import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  `

export const NavBar = styled.nav`
    display: flex;
    position: fixed;
    top: 0;
    width: 100%;
    justify-content: space-around;
    padding: 10px 0;
    background-color: ${({ theme }) => theme.color.white};
    filter: blur(.15px) opacity(0.8);
    z-index: 100;

    @media(max-width: ${({ theme }) => theme.media.PHONE}){
      justify-content: space-between;
    }
`

export const Button = styled.span`
  position: relative;
  display: flex;
  @media(min-width:  ${({ theme }) => theme.media.PHONE}){
    display: none;
  }
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
`

export const LineBtn = styled.div`
  width: 100%;
  height: 4px;
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 1px 2px ${({ theme }) => theme.color.shadowPrimary};
`
export const Search = styled.form`
  display: flex;
  padding: 5px;
  flex-direction: column;
  position: relative;
  width: 50%;

  @media(max-width: ${({ theme }) => theme.media.PHONE}){
    width: 80%;
  }
`
export const SearchField = styled.fieldset`
  display: flex;
  justify-content: space-between;
  border: none;
`

export const Filter = styled(SearchField)`
  padding-top: 5px;
  font-size: 20px;
  color: ${({ theme }) => theme.color.primary};
}
`
export const N = styled.fieldset`
  display: none;
`

export const RangeFilter = styled.input.attrs({ type: "range" })`
  margin: 0 5px;
  cursor: pointer;
  
  @media(max-width: ${({ theme }) => theme.media.TABLET}){
    width: 85px;
  }
`

export const SelectFilter = styled.select`
  height: 100%;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primary};
  font-size: 18px;
  border: 2px solid ${({ theme }) => theme.color.primary};
  border-radius: 5px;
  outline: none;
`

export const OptionFilter = styled.option`
  color:${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.primary};
  display: flex;
  min-height: 25px;
  padding: 0;

  &:hover{
    color:${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.white};
  }
  &:focus{
    color:${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.color.white};
  }
`

export const InputSearch = styled.input.attrs({ type: "search" })`
  width: 100%;
  outline: none;
  border: 2px solid ${({ theme }) => theme.color.shadowPrimary};
  padding: 5px 10px;;
  font-size: 16px;
  box-shadow: ${({ theme }) => theme.shadow.box};
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`
export const BtnSearch = styled.button`
  display: flex;
  width: 40px;
  place-content: center;
  height: 100%;
  padding: 5px 0px;
  border: none;
  background-color: ${({ theme }) => theme.color.segundary};
  color: ${({ theme }) => theme.color.grey};
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.box};
`
export const Ico = styled.i`
  margin: auto;
  color: ${({ theme }) => theme.color.white}
`

export const Picture = styled.picture`
  display: grid;
  place-content: center;
  border: 1px solid ${({ theme }) => theme.color.shadowPrimary};
  width: 50px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.shadow.box};
  background-color: ${({ theme }) => theme.color.white};
  height: 50px;
`
