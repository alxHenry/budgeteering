import React from 'react';
import './App.css';
import BudgetTable from './components/BudgetTable';
import TransactionInput from './components/TransactionInput';
import { getMockBudget } from './data/mock/budget';

const App: React.FC = () => {
  return (
    <>
      <TransactionInput onSubmit={() => {}} />
      <BudgetTable transactions={getMockBudget().transactions} />
    </>
  );
};

export default App;
