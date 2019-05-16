import styled, { keyframes } from 'styled-components';

const AppLogoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppContainer = styled.div`
  text-align: center;
`;

export const AppLogo = styled.img`
  animation: ${AppLogoSpin} infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
`;

export const AppHeader = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLink = styled.a`
  color: #61dafb;
`;
