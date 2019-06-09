import { Fab, Grid, Paper } from '@material-ui/core';
import { StyledComponentProps, withStyles } from '@material-ui/core/styles';
import GoogleIcon from 'assets/icons/GoogleIcon';
import FirebaseAuth from 'components/FirebaseAuth';
import React, { FC, useState } from 'react';

const styles = (theme: any) => ({
  paper: {
    padding: '16px',
    textAlign: 'center' as 'center',
  },
  icon: {
    marginRight: '12px',
  },
});

type LoginProvider = 'notSelected' | 'google';

const PageAuth: FC<StyledComponentProps> = ({ classes = {} }) => {
  const [loginProvider, setLoginProvider] = useState('notSelected' as LoginProvider);

  const onGoogleAuthClick = () => {
    setLoginProvider('google');
  };

  switch (loginProvider) {
    case 'google':
      return <FirebaseAuth />;
    default:
      return (
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h1>Budgeteering</h1>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <h3>Choose your login provider...</h3>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Fab color="primary" variant="extended" onClick={onGoogleAuthClick}>
                <GoogleIcon className={classes.icon} />
                Login with Google
              </Fab>
            </Paper>
          </Grid>
        </Grid>
      );
  }
};

export default withStyles(styles)(PageAuth);
