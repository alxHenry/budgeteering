import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetPage from 'components/BudgetPage';
import FirebaseAuth from 'components/FirebaseAuth';
import React from 'react';
import './App.css';

const styles = (theme: any) => ({
  appRoot: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
});

const App: React.FC<StyledComponentProps> = ({ classes = {} }) => {
  return (
    <div className={classes.appRoot}>
      <BudgetPage />
      <FirebaseAuth />
    </div>
  );
};

export default withStyles(styles)(App);
