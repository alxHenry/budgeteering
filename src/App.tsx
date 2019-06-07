import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import BudgetPage from 'components/BudgetPage';
import FirebaseAuth from 'components/FirebaseAuth';
import { getMe } from 'data/selectors';
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
  const me = getMe(state);

  const appContent = me ? <BudgetPage /> : <FirebaseAuth />;

  return <div className={classes.appRoot}>{appContent}</div>;
};

export default withStyles(styles)(App);
