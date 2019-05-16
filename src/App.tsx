import React from 'react';
import logo from './logo.svg';
import { AppContainer, AppHeader, AppLogo, AppLink } from './App.styles';
import { GlobalStyle } from './globalStyle';

const App: React.FC = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
