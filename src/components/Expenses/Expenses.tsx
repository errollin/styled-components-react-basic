import React from 'react';

import styled from 'styled-components';

import { Expense } from 'models';
import Card from 'components/common/Card/Card';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';

type Props = {
  expenses: Array<Expense>;
};

const ExpensesWrapper = styled(Card)`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`;

const Expenses = (props: Props) => {
  return (
    <ExpensesWrapper>
      <ExpenseList expenses={props.expenses} />
    </ExpensesWrapper>
  );
};

export default Expenses;
