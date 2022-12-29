import React, { useState } from 'react';

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

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 1px solid #40005d;
  background-color: #40005d;
  color: white;
  border-radius: 12px;
  margin-right: 1rem;

  &:hover,
  &:active {
    background-color: #510674;
    border-color: #510674;
  }

  &.alternative {
    color: #220131;
    border-color: transparent;
    background-color: transparent;

    &:hover,
    &:active {
      background-color: #ddb3f8;
    }
  }
`;

const NewExpense = (props: Props) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveExpenseData = (enteredExpenseData: Expense) => {
    const expenseData: Expense = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  const handleStopEditing = () => {
    setIsEditing(false);
  };

  return (
    <NewExpenseWrapper>
      {!isEditing && (
        <Button onClick={handleStartEditing}>Add New Expense</Button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={handleSaveExpenseData}
          onCancel={handleStopEditing}
        />
      )}
    </NewExpenseWrapper>
  );
};

export default NewExpense;
