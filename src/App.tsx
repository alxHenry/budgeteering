import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetPage from 'components/BudgetPage';
import { DraftTransaction } from 'data/api/transactions';
import { getBudget } from 'data/selectors';
import StoreContext from 'data/state/StoreContext';
import React, { useContext } from 'react';
import './App.css';

const styles = (theme: any) => ({
  appRoot: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
});

const App: React.FC<StyledComponentProps> = ({ classes = {} }) => {
  const { state, actionCreators } = useContext(StoreContext);
  const { periods } = getBudget(state);
  const lastPeriod = periods[periods.length - 1];

  const onSubmitTransaction = (draftTransaction: DraftTransaction) => {
    actionCreators.addTransaction({
      ...draftTransaction,
      id: '123',
    });
  };

  return (
    <div className={classes.appRoot}>
      <BudgetPage
        transactions={lastPeriod.transactions}
        onSubmitTransaction={onSubmitTransaction}
        startingAmount={lastPeriod.startingAmount}
      />
    </div>
  );
};

export default withStyles(styles)(App);
