import styled from "styled-components";
import { useState, useEffect } from "react";

export function Pagination ({ itemsPerPage, totalItems, paginate }){
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
      let numbers = []
      for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        numbers.push(i)
      }
      setPageNumbers(numbers)
    }, [itemsPerPage, totalItems])
    
    return (
      <NavPage>
        {pageNumbers.map(number => (
          <Page key={number} onClick={() => paginate(number)}>
            {number}
          </Page>
        ))}
      </NavPage>
    );
  };

const Page = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  cursor: pointer;
  width: 40px;
  height: 100%;
  
  &:hover {
        filter: brightness(1.5);
    }`

const NavPage = styled.nav`
    margin: 20px 0;
    background-color: ${({ theme }) => theme.color.shadowPrimary};
    display: flex;
    justify-content: center;
    height: 40px;
    border-radius: 10px;
`