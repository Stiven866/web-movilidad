import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles,ListItem,ListItemIcon,List,ListItemText,Drawer,Divider,Paper} from '@material-ui/core';
import {categories} from './data.js';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DateFnsUtils from "@date-io/date-fns";
import { BasePicker, MuiPickersUtilsProvider, Calendar } from "material-ui-pickers";

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  categoryHeaderPrimary: {
   color: theme.palette.common.white,
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: '#fafafa',
  },
  itemCalendar: {
    paddingTop:10,
    paddingBottom:4,
    paddingLeft: 0,
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #FFFFF inset',
    paddingTop: 16,
    paddingBottom: 16,
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize,
    },
  },
  textDense: {},
  divider: {
  marginTop: theme.spacing.unit * 2,
},
  iconButtonAvatar: {
    padding: 0,
    width: 70,
    height: 70,
    margin: 5,
    },
  itemActionable: {
    '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    },
  },
  itemActiveItem: {
   color: '#4fc3f7',
  },
});

class Navigator extends Component {

  constructor(props) {
      super(props);
      this.state = {
        selectedDate: new Date(),
      };
    }

  handleDateChange = (date) => {
    this.setState({ selectedDate: date });
  }

    render(){
      const {selectedDate} = this.state;
      const { classes, ...other } = this.props;

  return (
    <div>
      <Drawer variant="permanent" {...other}>
        <List disablePadding>
          <ListItem className={classNames(classes.item, classes.itemCategory)}>
            <IconButton color="inherit">
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-IQjfa4W1pi2M9AT4v_uvbO0Fz2lbbfsfTTo6Rf8SqeghVUPj"
                className={classes.iconButtonAvatar}>
              </Avatar>
            </IconButton>
              <ListItemText classes={{primary:classes.itemPrimary}} >
                Stiven Duque
              </ListItemText>
          </ListItem>

          <ListItem className={classNames(classes.Calendar)}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <BasePicker value={selectedDate} onChange={this.handleDateChange}>
                {({
                  date,
                  handleAccept,
                  handleChange,
                  handleClear,
                  handleDismiss,
                  handleSetTodayDate,
                  handleTextFieldChange,
                }) => (
                  <div>
                    <div className="picker">
                      <Paper style={{ overflow: "hidden" }}>
                        <Calendar date={date} onChange={handleChange} />
                      </Paper>
                    </div>
                  </div>
                )}
              </BasePicker>
            </MuiPickersUtilsProvider>
          </ListItem>

          <Divider className={classes.divider} />

          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <ListItem className={classes.categoryHeader}>
                <ListItemText classes={{primary: classes.categoryHeaderPrimary}}>
                  {id}
                </ListItemText>
              </ListItem>
              {children.map(({ id: childId, icon, active }) => (
                <ListItem button dense key={childId}
                  className={classNames(
                    classes.item,
                    classes.itemActionable,
                    active && classes.itemActiveItem,
                  )}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.itemPrimary,
                      textDense: classes.textDense,
                    }}
                  >
                    {childId}
                  </ListItemText>
                </ListItem>
              ))}
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}

        </List>
      </Drawer>
      </div>
    )
  }
}

Navigator.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);
