import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetTable from 'components/BudgetTable';
import RemainingPeriodAmount from 'components/RemainingPeriodAmount';
import TransactionInput from 'components/TransactionInput';
import { Transaction } from 'data/types';
import React, { FC } from 'react';

export interface BudgetPageProps {
  transactions: Transaction[];
  startingAmount: number;
  onSubmitTransaction(transaction: Transaction): void;
}

const styles = (theme: any) => ({
  paper: {
    padding: '16px',
    textAlign: 'center' as 'center',
  },
});

const BudgetPage: FC<BudgetPageProps & StyledComponentProps> = ({
  transactions,
  startingAmount,
  onSubmitTransaction,
  classes = {},
}) => (
  <Grid container spacing={4} justify="center" alignItems="center">
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <h1>Budgeteering</h1>
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <RemainingPeriodAmount transactions={transactions} startingAmount={startingAmount} />
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <TransactionInput onSubmit={onSubmitTransaction} />
      </Paper>
    </Grid>
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <BudgetTable transactions={transactions} />
      </Paper>
    </Grid>
  </Grid>
);

export default withStyles(styles)(BudgetPage);
