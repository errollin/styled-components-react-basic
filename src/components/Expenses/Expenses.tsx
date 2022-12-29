import React, { useState } from 'react';

import styled from 'styled-components';

import { Expense } from 'models';
import Card from 'components/common/Card/Card';
import ExpenseList from 'components/Expenses/ExpenseList/ExpenseList';
import ExpenseFilter from 'components/Expenses/ExpenseFilter/ExpenseFilter';
import ExpenseChart from 'components/Expenses/ExpenseChart/ExpenseChart';

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
  const [filteredYear, setFilteredYear] = useState('2022');

  const handleFilterChange = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <ExpensesWrapper>
      <ExpenseFilter
        selected={filteredYear}
        onFilterChange={handleFilterChange}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </ExpensesWrapper>
  );
};

export default Expenses;
