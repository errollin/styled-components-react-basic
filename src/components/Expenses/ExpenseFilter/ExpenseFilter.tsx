import React from 'react';

import styled from 'styled-components';

import { Item } from 'models';
import { DUMMY_YEAR_OPTIONS } from 'data';

type Props = {
  selected: string;
  onFilterChange: Function;
};

const FilterWrapper = styled.div`
  color: white;
  padding: 0 1rem;
`;

const FilterControl = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Select = styled.select`
  font: inherit;
  padding: 0.5rem 3rem;
  font-weight: bold;
  border-radius: 6px;
`;

const Option = styled.option``;

const ExpenseFilter = (props: Props) => {
  const years: Array<Item> = DUMMY_YEAR_OPTIONS;

  const handleChangeFilter: React.ChangeEventHandler = (event: any) => {
    props.onFilterChange(event.target.value);
  };

  return (
    <FilterWrapper>
      <FilterControl>
        <Label htmlFor='year'>Filter By Year</Label>
        <Select id='year' value={props.selected} onChange={handleChangeFilter}>
          {years.map((item, index) => {
            return (
              <Option key={index} value={item.value}>
                {item.label}
              </Option>
            );  
          })}
        </Select>
      </FilterControl>
    </FilterWrapper>
  );
};

export default ExpenseFilter;
