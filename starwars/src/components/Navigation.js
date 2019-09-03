import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0.8;
  background-color: white;
`;

const Logo = styled.h1`
  -webkit-background-clip: text;
  font-size: 5rem;
  font-weight: 900;
`;

function Navigation() {
  return (
    <NavBar>
      <Logo>React Wars!!!</Logo>
    </NavBar>
  )
}

export default Navigation
