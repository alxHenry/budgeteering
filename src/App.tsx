import { DraftTransaction } from 'data/api/transactions';
import React, { useState } from 'react';
import './App.css';
import BudgetTable from './components/BudgetTable';
import TransactionInput from './components/TransactionInput';
import { getMockBudget } from './data/mock/budget';

const App: React.FC = () => {
  const [transactions, setTransactions] = useState(getMockBudget().transactions);

  return (
    <>
      <TransactionInput
        onSubmit={(draftTransaction: DraftTransaction) => {
          setTransactions([
            ...transactions,
            {
              id: '123',
              ...draftTransaction,
            },
          ]);
        }}
      />
      <BudgetTable transactions={transactions} />
    </>
  );
};

export default App;
