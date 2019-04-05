import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from '../../../storage/events';
import EventWrapper from "./EventWrapper";
import "react-big-calendar/lib/css/react-big-calendar.css";

import "./index.css";

moment.locale('en-GB');
const localizer = BigCalendar.momentLocalizer(moment)




const Popup = () => (
  
    <BigCalendar
    components={{
      eventWrapper: EventWrapper
      // event: Event
    }}
    localizer={localizer}
    defaultDate={new Date(2018, 3, 27)}
    defaultView="day"
    events={events}
    views={["week","day"]}
    />

  );

export default Popup;
