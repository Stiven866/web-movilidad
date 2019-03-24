import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar,Toolbar,Typography,Paper,Grid,Button,CardActions} from '@material-ui/core';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateDialog from './dialog/CreateDialog';
import CreateDialogPaid from './dialog/CreateDialogPaid';


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
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    marginTop:5,
    marginBottom:20
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  },
  searchInput: {
    fontSize: theme.typography.fontSize,
  },
  block: {
    display: 'block',
  },
  addUser: {
    marginRight: theme.spacing.unit,
  },
  contentWrapper: {
    margin: '40px 16px',
  },
  button:{
    marginLeft: theme.spacing.unit,
  }
});

class Card extends Component{
  render(){
    const { classes } = this.props;
    const {
      title = '',
      description = ''
    }=this.props

    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Paper className={classes.paper}>
            <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
              <Toolbar>
                <Grid container spacing={16} alignItems="center">
                  <Grid item>
                    <DescriptionIcon className={classes.block} color="inherit" />
                  </Grid>
                  <Grid item xs>
                    {title}
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <div className={classes.contentWrapper}>
              <Typography color="textSecondary" align="center">
                {description}
              </Typography>
            </div>
            <CardActions className={classes.button}>
            
              <CreateDialogPaid nameButton="Agendar Comparecencia"/>
              <CreateDialog nameButton="Ver mas"/>
              <Button disabled variant="outlined" color="primary" className={classes.button}>
              Subir Documentos
              </Button>
              </CardActions>
          </Paper>
        </div>
      </MuiThemeProvider>


    );
}
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
