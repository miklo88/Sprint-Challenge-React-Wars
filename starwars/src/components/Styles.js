import styled from 'styled-components';

// Font Family Style -- incorporate another font!
let HelveticaFamily = `Helvetica`
// Styles
// font styles
export const StyledName = styled.h1`
    font-family: ${HelveticaFamily}, sans-serif;
`;
export const StyledH2 = styled.h2`
    font-family: ${HelveticaFamily}, sans-serif;
`;
export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1px;
    background-color: white;
    opacity: 0.8;
    width: 30%;
    padding: 20px;
    margin: 30px;
`;



