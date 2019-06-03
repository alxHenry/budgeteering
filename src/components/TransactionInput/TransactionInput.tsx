import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { DraftTransaction } from 'data/api/transaction';
import { getMockUser } from 'data/mock/user';
import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

export interface TransactionInputProps {
  onSubmit(transaction: DraftTransaction): void;
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
      transactor: getMockUser(),
      category,
      note,
    });
  };

  return (
    <Grid container={true} spacing={4} justify="center" alignItems="center">
      <Grid item={true}>
        <TextField label="Amount" value={amount} onChange={handleAmountChange} />
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
          size="medium"
          onClick={event => {
            handleSubmit(event);
          }}
        >
          <AttachMoney />
          Spend
        </Button>
      </Grid>
    </Grid>
  );
};

export default TransactionInput;
