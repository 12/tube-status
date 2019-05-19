import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins');

    body {
        background: #273c75;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-feature-settings: none;
        font-family: 'Poppins', sans-serif;
    }
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  background: #ffffff;
  width: 50vw;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
