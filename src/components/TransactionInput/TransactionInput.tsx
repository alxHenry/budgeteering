import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Transaction, User } from '../../data/types';

export interface TransactionInputProps {
  onSubmit(transaction: Partial<Transaction>): void;
}

export interface TransactionInputState {
  amount: number;
}

const TransactionInput: FC<TransactionInputProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.currentTarget.value, 10);
    setAmount(newValue);
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    const submitAmount = isNaN(amount) ? 0 : amount;
    onSubmit({
      amount: submitAmount,
      transactor: {} as User,
    });
  };

  return (
    <form>
      <TextField label="Amount" variant="outlined" type="number" value={amount} onChange={handleAmountChange} />
      <Button variant="contained" color="primary" onSubmit={handleSubmit}>
        Spend
      </Button>
    </form>
  );
};

export default TransactionInput;
