import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetPage from 'components/BudgetPage';
import { getCurrentUser } from 'data/api/user';
import StoreContext from 'data/state/StoreContext';
import React, { useContext, useEffect } from 'react';
import './App.css';

const styles = (theme: any) => ({
  appRoot: {
    backgroundColor: '#f5f5f5',
    height: '100%',
    width: '100%',
  },
});

const App: React.FC<StyledComponentProps> = ({ classes = {} }) => {
  const { actionCreators } = useContext(StoreContext);
  useEffect(() => {
    getCurrentUser().then(user => {
      if (!user) {
        return;
      }
      actionCreators.currentUserLoaded(user);
    });
  }, []);

  return (
    <div className={classes.appRoot}>
      <BudgetPage />
    </div>
  );
};

export default withStyles(styles)(App);
