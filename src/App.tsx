import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import PageAuth from 'components/Auth/PageAuth';
import BudgetPage from 'components/BudgetPage';
import { getMe } from 'data/selectors';
import StoreContext from 'data/state/StoreContext';
import useFirebaseAuth from 'hooks/useFirebaseAuth';
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
  const { state } = useContext(StoreContext);
  const me = getMe(state);

  useFirebaseAuth();

  const appContent = me ? <BudgetPage /> : <PageAuth />;
  return <div className={classes.appRoot}>{appContent}</div>;
};

export default withStyles(styles)(App);
