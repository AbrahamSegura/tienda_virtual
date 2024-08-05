import styled from "styled-components"

export function ToggleMebu({ active, inProduct, children }) {
  if (active) {
    return <Menu>{children}</Menu>
  } else {
    if (!inProduct) {
      return <MenuActivedOutProduct>{children}</MenuActivedOutProduct>
    }
    return <MenuActived>{children}</MenuActived>
  }
}

const Menu = styled.div`
  position: absolute;
  top: calc(100% - 10px);
  right: 10px;
  width: 150px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.color.shadowSegundary};
  box-shadow: ${({ theme }) => theme.shadow.box};
  transition: .5s ease;
  border-radius: 15px;
  visibility: hidden;

  &::before{
    content: "";
    position: absolute;
    top: -10px;
    right: 6.5vw;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.color.shadowSegundary};
    transform: rotate(45deg);

    @media(max-width: ${({ theme }) => theme.media.PHONE}){
      right: 1vw;
    }
}
`

const MenuActived = styled(Menu)`
visibility: visible;
`
const MenuActivedOutProduct = styled(MenuActived)`
top: calc(100% + 10px);
`