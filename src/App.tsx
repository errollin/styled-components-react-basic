import React from 'react';

import { createGlobalStyle } from 'styled-components';

import { DUMMY_EXPENSES } from 'data/expenses';
import { Expense } from 'models';
import Expenses from 'components/Expenses/Expenses';

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

  const expenses: Array<Expense> = DUMMY_EXPENSES;

  return (
    <React.Fragment>
      <GlobalStyle />
      <Expenses expenses={expenses} />
    </React.Fragment>
  );
};

export default App;
