import React from 'react';
import { useHistory } from 'react-router';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { useAuth } from '../../providers/Auth/Auth';

const LoginDialog = ({ openCredential, setOpenCredential }) => {
  const { login } = useAuth();
  const history = useHistory();

  const authenticate = (event) => {
    event.preventDefault();
    login();
    history.push('/');
    setOpenCredential(false);
  };

  const handleClose = () => {
    setOpenCredential(false);
  };

  return (
    <Dialog
      open={openCredential}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">Login</DialogTitle>
      <DialogContent>
        <TextField autoFocus margin="dense" id="user" label="User" type="" fullWidth />
        <TextField
          autoFocus
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={authenticate} color="primary">
          Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginDialog;
