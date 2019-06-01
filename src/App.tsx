import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetPage from 'components/BudgetPage';
import React from 'react';
import './App.css';

const styles = (theme: any) => ({
  appRoot: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
});

const App: React.FC<StyledComponentProps> = ({ classes = {} }) => (
  <div className={classes.appRoot}>
    <BudgetPage />
  </div>
);

export default withStyles(styles)(App);
