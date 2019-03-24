import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import {Button,Dialog} from '@material-ui/core';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import Grid from '@material-ui/core/Grid';
import {List,ListItem,ListItemText} from '@material-ui/core';

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
  },
  fab: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
  gridList: {
    width: 300,
    height: 200,
  },
  formWrapper: {
    maxWidth:'60vh',
    display: 'flex',
    flexDirection: 'row',
    padding: '10px 30px',
    margin:'10px',
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

class CreateDialogPaid extends Component {
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
                    Agendar una Cita
                </DialogTitle>
                <DialogContent>
                <List disablePadding component='ul'>
                    <Grid container direction='row' className={(classes.formWrapper,classes.gridList)}>
                        <ListItem button > 
                        <Fab href='https://www.pse.com.co/inicio' color="primary" aria-label="Edit" className={classes.fab}>
                            <AttachMoneyIcon/>
                        </Fab>
                        <ListItemText>Pagar Comparecencia</ListItemText>
                        </ListItem> 
                        <ListItem button> 
                        <Fab color="primary" aria-label="Edit" className={classes.fab}>
                            <CalendarIcon/>
                        </Fab>
                        <ListItemText>Agendar Cita</ListItemText>
                        </ListItem>
                    </Grid>
                    </List>
                </DialogContent>
                <DialogActions>
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


CreateDialogPaid.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(CreateDialogPaid);