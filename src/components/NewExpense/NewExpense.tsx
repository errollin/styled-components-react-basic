import React from 'react';

import styled from 'styled-components';

import { Expense } from 'models';

import Card from 'components/common/Card/Card';
import ExpenseForm from 'components/NewExpense/ExpenseForm/ExpenseForm';

type Props = {
  onAddExpense: Function;
};

const NewExpenseWrapper = styled(Card)`
  background-color: #a892ee;
  padding: 1rem;
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
  text-align: center;
`;

const NewExpense = (props: Props) => {
  const handleSaveExpenseData = (enteredExpenseData: Expense) => {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <NewExpenseWrapper>
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </NewExpenseWrapper>
  );
};

export default NewExpense;
