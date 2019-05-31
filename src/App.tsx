import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetPage from 'components/BudgetPage';
import { DraftTransaction } from 'data/api/transactions';
import React, { useState } from 'react';
import './App.css';
import { getMockBudget } from './data/mock/budget';

const styles = (theme: any) => ({
  appRoot: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
});

const App: React.FC<StyledComponentProps> = ({ classes = {} }) => {
  const [transactions, setTransactions] = useState(getMockBudget().transactions);

  const onSubmitTransaction = (draftTransaction: DraftTransaction) => {
    setTransactions([
      ...transactions,
      {
        id: '123',
        ...draftTransaction,
      },
    ]);
  };

  return (
    <div className={classes.appRoot}>
      <BudgetPage transactions={transactions} onSubmitTransaction={onSubmitTransaction} />
    </div>
  );
};

export default withStyles(styles)(App);
