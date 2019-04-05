import React from "react";
import moment from "moment-mini";
import {MuiThemeProvider,createMuiTheme} from '@material-ui/core/styles'

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
      light:'#56b7b0',
      main: '#32a79f',
      dark: '#199088',
      contrastText: '#fff',
    },
  },
  shape: {
    borderRadius: 8,
  },
});

const EventWrapper = ({ event, children }) => {
  const { title, className } = children.props;
  const customClass = `${className} rbc-event--${event.type}`;
  const hourStart = moment(event.start).hour();
  const hourStop = moment(event.end).hour();
  const gridRowStart = hourStart + 1;

  return (
    <MuiThemeProvider theme={theme}>
    <div
      title={title}
      className={customClass}
      style={{ gridRow: `${gridRowStart} / span ${hourStop - hourStart}` }}
    >
      {children.props.children}
    </div>
    </MuiThemeProvider>
  );
};

export default EventWrapper;