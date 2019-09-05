import React from 'react';
import styled from 'styled-components';

// const Nav = styled.nav`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   opacity: 0.8;
//   background-color: white;
// `;

// const Logo = styled.h1`
//   -webkit-background-clip: text;
//   font-size: 5rem; 
//   font-weight: 900;
// `;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Logo = styled.h1`
  -webkit-background-clip: text;
  font-size: 9rem; 
  font-weight: 900;
  color: white;
`;
// const Paragraph = styled.p`


function Navigation() {
  return (
    <Nav>
      <Logo>React Wars!!!</Logo>
    </Nav>
  )
}

export default Navigation
