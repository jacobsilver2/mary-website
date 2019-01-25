import React from 'react';
import styled from 'styled-components';
import Nav from './Nav';

const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
    @media (max-width: 1300px) {
      grid-template-columns: 1fr;
      justify-content: center;
    }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  
  a {
    padding: 0.5rem 1rem;
    color: black;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;


const Header = () => (
  <StyledHeader>
    <Logo>
      <a>Mary Choueiter</a>
    </Logo>
    <Nav />
  </StyledHeader>  
);

export default Header;