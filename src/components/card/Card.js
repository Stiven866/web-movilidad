import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {AppBar,Toolbar,Typography,Paper,Grid,Button,CardActions} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import CreateDialog from '../dialog/CreateDialog';

const styles = theme => ({
  paper: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
    marginTop:5
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
    marginLeft: 'auto',
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
            <Button variant="outlined" color="primary">
              Agendar Cita
            </Button>
            <CreateDialog/>
            </CardActions>
        </Paper>
      </div>


    );
}
}

Card.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Card);
