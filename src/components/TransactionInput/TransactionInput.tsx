import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import AttachMoney from '@material-ui/icons/AttachMoney';
import { getMeWithoutCreds } from 'data/selectors';
import StoreContext from 'data/state/StoreContext';
import { Transaction } from 'data/types';
import React, { ChangeEvent, FC, FormEvent, useContext, useState } from 'react';
import uuidv4 from 'uuid/v4';

export interface TransactionInputProps {
  onSubmit(transaction: Transaction): void;
}

const TransactionInput: FC<TransactionInputProps> = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [note, setNote] = useState('');

  const { state } = useContext(StoreContext);
  const me = getMeWithoutCreds(state);

  const clearForm = () => {
    setAmount('');
    setCategory('');
    setNote('');
  };

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
      id: uuidv4(),
      amount: submitAmount,
      transactor: me,
      category,
      note,
    });

    clearForm();
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
