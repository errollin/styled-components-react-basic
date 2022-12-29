import React from 'react';

import styled from 'styled-components';

import { Expense } from 'models';
import ExpenseItem from 'components/Expenses/ExpenseItem/ExpenseItem';

type Props = {
  expenses: Array<Expense>;
};

const ExpenseListWrapper = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExpenseListFallback = styled.h2`
  color: white;
  text-align: center;
`;

const ExpenseList = (props: Props) => {
  if (props.expenses.length === 0) {
    return <ExpenseListFallback>No Expenses Found!</ExpenseListFallback>;
  }

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
