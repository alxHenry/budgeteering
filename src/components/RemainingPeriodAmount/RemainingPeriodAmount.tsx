import { Grid, StyledComponentProps, withStyles } from '@material-ui/core';
import { Transaction } from 'data/types';
import React, { FC } from 'react';

export interface RemainingPeriodAmountProps {
  transactions: Transaction[];
  startingAmount: number;
}

const styles = (theme: any) => ({
  heading: {
    color: '#b3b3b3',
    fontSize: 16,
    fontWeight: 'bold' as 'bold',
    margin: '0.25em',
  },
  remainingAmount: {
    fontWeight: 'bold' as 'bold',
    fontSize: 32,
    margin: '0.25em',
  },
});

const RemainingPeriodAmount: FC<RemainingPeriodAmountProps & StyledComponentProps> = ({
  transactions,
  startingAmount,
  classes = {},
}) => {
  const transactionsTotal = transactions.reduce((total, transaction) => total + transaction.amount, 0);
  const remainingAmount = startingAmount - transactionsTotal;

  return (
    <Grid container>
      <Grid item xs={12}>
        <p className={classes.heading}>Remaining</p>
      </Grid>
      <Grid item xs={12}>
        <p className={classes.remainingAmount}>{remainingAmount}</p>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(RemainingPeriodAmount);
