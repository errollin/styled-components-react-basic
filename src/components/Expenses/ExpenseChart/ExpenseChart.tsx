import React from 'react';

import styled from 'styled-components';

import { Expense } from 'models';
import Chart from 'components/Chart/Chart';

type Props = {
  expenses: Array<Expense>;
};

const ExpenseChartWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  margin: 1rem 0;
`;

const ExpenseChart = (props: Props) => {
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  for (const expense of props.expenses) {
    // starting at 0 => January
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  return (
    <ExpenseChartWrapper>
      <Chart dataPoints={chartDataPoints} />
    </ExpenseChartWrapper>
  );
};

export default ExpenseChart;
