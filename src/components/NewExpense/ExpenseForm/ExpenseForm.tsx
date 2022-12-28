import React, { useState } from 'react';

import styled from 'styled-components';

import { Expense } from 'models';

type Props = {
  onSaveExpenseData: Function;
};

const FormControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
  text-align: left;
`;

const FormControl = styled.div``;

const FormActions = styled.div`
  text-align: right;
`;

const Form = styled.form``;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
`;

const Input = styled.input`
  font: inherit;
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  width: 20rem;
  max-width: 100%;
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

const ExpenseForm = (props: Props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const handleChangeTitle: React.ChangeEventHandler = (event: any) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTtile: event.target.value };
    // });
  };

  const handleChangeAmount: React.ChangeEventHandler = (event: any) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredAmount: event.target.value };
    // });
  };

  const handleChangeDate: React.ChangeEventHandler = (event: any) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredDate: event.target.value };
    // });
  };

  const onSubmit: React.FormEventHandler = (event: any) => {
    event.preventDefault();

    const expenseData: Expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormControls>
        <FormControl>
          <Label htmlFor='title'>Title</Label>
          <Input
            id='title'
            type='text'
            value={enteredTitle}
            onChange={handleChangeTitle}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='amount'>Amount</Label>
          <Input
            id='amount'
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={handleChangeAmount}
          />
        </FormControl>
        <FormControl>
          <Label htmlFor='date'>Date</Label>
          <Input
            id='date'
            type='date'
            min='2022-01-01'
            max='2023-12-31'
            value={enteredDate}
            onChange={handleChangeDate}
          />
        </FormControl>
      </FormControls>
      <FormActions>
        <Button type='submit'>Add Expense</Button>
      </FormActions>
    </Form>
  );
};

export default ExpenseForm;
