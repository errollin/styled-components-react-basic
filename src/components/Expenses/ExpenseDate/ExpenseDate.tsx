import React from 'react';

import styled from 'styled-components';

type Props = {
  date: Date;
};

const DateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 5.5rem;
  height: 5.5rem;
  border: 1px solid #ececec;
  background-color: #2a2a2a;
  color: white;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
`;

const MonthWrapper = styled.div`
  font-size: 0.75rem;
  font-weight: bold;
`;

const YearWrapper = styled.div`
  font-size: 0.75rem;
`;

const DayWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const ExpenseDate = (props: Props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <DateWrapper>
      <MonthWrapper>{month}</MonthWrapper>
      <YearWrapper>{year}</YearWrapper>
      <DayWrapper>{day}</DayWrapper>
    </DateWrapper>
  );
};

export default ExpenseDate;
