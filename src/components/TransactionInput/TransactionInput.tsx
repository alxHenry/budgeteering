import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Transaction, User } from '../../data/types';

export interface TransactionInputProps {
  onSubmit(transaction: Partial<Transaction>): void;
}

export interface TransactionInputState {
  amount: string;
}

const TransactionInput: FC<TransactionInputProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAmount(event.currentTarget.value);
  };

  const handleCategoryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCategory(event.currentTarget.value);
  };

  const handleNoteChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.currentTarget.value);
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    const parsedAmount = parseFloat(amount);
    const submitAmount = isNaN(parsedAmount) ? 0 : parsedAmount;

    onSubmit({
      amount: submitAmount,
      transactor: {} as User,
    });
  };

  return (
    <Grid container={true} spacing={2} justify="center">
      <Grid item={true}>
        <Input
          value={amount}
          onChange={handleAmountChange}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
        />
      </Grid>
      <Grid item={true}>
        <TextField label="Category" value={category} onChange={handleCategoryChange} />
      </Grid>
      <Grid item={true}>
        <TextField label="Note" value={note} onChange={handleNoteChange} />
      </Grid>
      <Grid item={true}>
        <Button
          variant="contained"
          color="primary"
          onClick={event => {
            handleSubmit(event);
          }}
        >
          Spend
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransactionInput;
