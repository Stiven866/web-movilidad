import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import {Button,Dialog,IconButton,Tooltip} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import InsertIvitationIcon from '@material-ui/icons/InsertInvitationOutlined'; 
import VideoCamIcon from '@material-ui/icons/VideocamOutlined'; 
import Typography from '@material-ui/core/Typography';
import Table from './Table';


let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5,
    },
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3',
    },
  },
  shape: {
    borderRadius: 8,
  },
});
const styles = theme => ({
  button:{
    marginLeft:theme.spacing.unit,
  }
});

const DialogTitle = withStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing.unit,
    top: theme.spacing.unit,
    color: theme.palette.grey[500],
  }
}))(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
})

const DialogContent = withStyles(theme => ({
  root: {
    margin: 0,
    padding: theme.spacing.unit * 2,
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: 0,
    padding: theme.spacing.unit,
  },
}))(MuiDialogActions);

class CreateDialog extends Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {classes, nameButton} = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Button variant="outlined" color="primary" onClick={this.handleClickOpen} className={classes.button}>
            {nameButton}
          </Button>
          <Dialog
            onClose={this.handleClose}
            aria-labelledby="customized-dialog-title"
            open={this.state.open}
          >
            <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
              Detalles de la Multa
            </DialogTitle>
            <DialogContent>
              <Table/>
            </DialogContent>
            <DialogActions>
              <IconButton size='small' >
                <Tooltip title="Fecha y Hora de la Cita: 10/20/2019">
                <InsertIvitationIcon variant="outlined"/>
                </Tooltip>
              </IconButton>
              <IconButton size='small' href="https://hangouts.google.com/?hl=es-419">
                <Tooltip title="Cuando des click aquí te enviará a la plataforma para realizar la VideoAudiencia">
                <VideoCamIcon variant="outlined"/>
                </Tooltip>
              </IconButton>
              <Button onClick={this.handleClose}  variant="outlined" color="primary">
                Cerrar
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}


CreateDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CreateDialog);
