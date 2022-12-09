import React from 'react';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: "Noto Sans JP", sans-serif;
  }
  body {
    margin: 0;
    background-color: #3f3f3f;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
    </React.Fragment>
  );
};

export default App;
