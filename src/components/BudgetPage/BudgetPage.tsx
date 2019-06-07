import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetTable from 'components/BudgetTable';
import RemainingPeriodAmount from 'components/RemainingPeriodAmount';
import TransactionInput from 'components/TransactionInput';
import { fetchBudget, postBudget, subscribeToBudget, unsubscribeFromBudget } from 'data/api/budget';
import { getBudget, getCurrentPeriod } from 'data/selectors';
import StoreContext from 'data/state/StoreContext';
import { Budget, Transaction } from 'data/types';
import { addTransactionToBudget } from 'data/utils/budget';
import React, { FC, useContext, useEffect } from 'react';

const styles = (theme: any) => ({
  paper: {
    padding: '16px',
    textAlign: 'center' as 'center',
  },
});

const BudgetPage: FC<StyledComponentProps> = ({ classes = {} }) => {
  const { state, actionCreators } = useContext(StoreContext);
  const budget = getBudget(state);
  const currentPeriod = getCurrentPeriod(state);
  const transactions = currentPeriod ? currentPeriod.transactions : [];
  const startingAmount = currentPeriod ? currentPeriod.startingAmount : 0;

  useEffect(() => {
    subscribeToBudget('hb9zADJBVAd6Y3akSCig', snap => {
      const updatedBudget = snap.data() as Budget | undefined;
      if (updatedBudget) {
        actionCreators.budgetLoaded(updatedBudget);
      }
    });

    fetchBudget('hb9zADJBVAd6Y3akSCig').then(fetchedBudget => {
      if (fetchedBudget) {
        actionCreators.budgetLoaded(fetchedBudget);
      }
    });

    return () => {
      unsubscribeFromBudget();
    };
  }, []);

  if (!budget) {
    return null;
  }

  const onSubmitTransaction = async (newTransaction: Transaction) => {
    const modifiedBudget = addTransactionToBudget(budget, newTransaction);
    postBudget(modifiedBudget);
  };

  return (
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
};

export default withStyles(styles)(BudgetPage);
