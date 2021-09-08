import React from "react";

export interface TimelineEventContextProps {
  hasOppositeContent: boolean;
  setHasOppositeContent: React.Dispatch<React.SetStateAction<boolean>>;
}

const TimelineEventContext = React.createContext<TimelineEventContextProps>({
  hasOppositeContent: false,
  setHasOppositeContent: () => {},
});

export default TimelineEventContext;
