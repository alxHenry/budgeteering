import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetTable from 'components/BudgetTable';
import TransactionInput from 'components/TransactionInput';
import { Transaction } from 'data/types';
import React, { FC } from 'react';

export interface BudgetPageProps {
  transactions: Transaction[];
  onSubmitTransaction(transaction: Transaction): void;
}

const styles = (theme: any) => ({
  paper: {
    padding: '8px',
    textAlign: 'center' as 'center',
  },
});

const BudgetPage: FC<BudgetPageProps & StyledComponentProps> = ({
  transactions,
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
