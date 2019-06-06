import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetTable from 'components/BudgetTable';
import RemainingPeriodAmount from 'components/RemainingPeriodAmount';
import TransactionInput from 'components/TransactionInput';
import { getBudget, unsubscribeFromBudget } from 'data/api/budget';
import { DraftTransaction, postTransaction } from 'data/api/transaction';
import { getCurrentPeriod } from 'data/selectors';
import StoreContext from 'data/state/StoreContext';
import React, { FC, useContext, useEffect } from 'react';

const styles = (theme: any) => ({
  paper: {
    padding: '16px',
    textAlign: 'center' as 'center',
  },
});

const BudgetPage: FC<StyledComponentProps> = ({ classes = {} }) => {
  const { state, actionCreators } = useContext(StoreContext);
  const currentPeriod = getCurrentPeriod(state);
  const transactions = currentPeriod ? currentPeriod.transactions : [];
  const startingAmount = currentPeriod ? currentPeriod.startingAmount : 0;

  useEffect(() => {
    // subscribeToBudget('Il3Wqe4yeKN0sO69jGQ9', snap => {});
    const budget = getBudget('Il3Wqe4yeKN0sO69jGQ9').then(budget => {
      // set budget in store
    });

    return () => {
      unsubscribeFromBudget();
    };
  }, []);

  const onSubmitTransaction = async (draftTransaction: DraftTransaction) => {
    const result = await postTransaction(draftTransaction);
    if (!result) {
      return;
    }
    actionCreators.addTransaction(result);
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
