import React from 'react';

import styled from 'styled-components';

import { Expense } from 'models';
import ExpenseItem from 'components/Expenses/ExpenseItem/ExpenseItem';

type Props = {
  expenses: Array<Expense>;
};

const ExpenseListWrapper = styled.div`
  list-style: none;
  padding: 0;
`;

const ExpenseList = (props: Props) => {
  return (
    <ExpenseListWrapper>
      {props.expenses.map((item: Expense) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </ExpenseListWrapper>
  );
};

export default ExpenseList;
