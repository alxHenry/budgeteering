import React from 'react';
import './App.css';
import BudgetTable from './components/BudgetTable';
import { getMockBudget } from './data/mock/budget';

const App: React.FC = () => {
  return (
    <>
      <BudgetTable transactions={getMockBudget().transactions} />
    </>
  );
};

export default App;
