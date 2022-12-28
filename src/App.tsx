import React, { useState } from 'react';

import { createGlobalStyle } from 'styled-components';

import { DUMMY_EXPENSES } from 'data';
import { Expense } from 'models';
import Expenses from 'components/Expenses/Expenses';
import NewExpense from 'components/NewExpense/NewExpense';

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
  const [expenses, setExpenses] = useState<Array<Expense>>(DUMMY_EXPENSES);

  const handleAddExpense = (expense: Expense) => {
    setExpenses((prevSatate) => {
      return [expense, ...prevSatate];
    });
  };

  return (
    <React.Fragment>
      <GlobalStyle />
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </React.Fragment>
  );
};

export default App;
