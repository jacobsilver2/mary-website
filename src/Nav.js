import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

const NavStyled = styled.a`
    padding: 1rem 1rem;
    display: flex;
    align-items: center;
    position: relative;
    font-weight: 900;
    font-size: 1em;
    background: none;
    cursor: pointer;
    color: ${props => props.theme.black};
    font-weight: 600;

    @media (max-width: 1300px) {
      border-top: 1px solid ${props => props.theme.lightgrey};
      width: 100%;
      justify-content: center;
      font-size: 1.5rem;
    }

    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    
      &:before {
        content: '';
        width: 2px;
        background: ${props => props.theme.lightgrey};
        height: 100%;
        left: 0;
        position: absolute;
        transform: skew(-20deg);
        top: 0;
        bottom: 0;
      }
      &:after {
        height: 2px;
        background: red;
        content: '';
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 2rem;
      }
      &:hover,
      &:focus {
        outline: none;
        &:after {
          width: calc(100% - 60px);
        }
      }
    }

`;

const NavContainerStyles = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1rem;
`;



const Nav = () => (
    <NavContainerStyles>
      <NavLink to="/" activeStyle={{color: 'red'}}><NavStyled>Works</NavStyled></NavLink>
      <NavLink to="/sidenotes" activeStyle={{color: 'red'}}><NavStyled>Side Notes</NavStyled></NavLink>
      <NavLink to="/about" activeStyle={{color: 'red'}}><NavStyled>About</NavStyled></NavLink>
    </NavContainerStyles>
);

export default Nav;