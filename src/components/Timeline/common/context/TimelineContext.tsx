import React from "react";

import { Placement, PlacementWithAlternate, Direction } from "../types";

export interface TimelineContextProps {
  placement?: PlacementWithAlternate;
  placementStart?: Placement;
  direction?: Direction;
  showOnlyOneSide?: boolean;
}

const TimelineContext = React.createContext<TimelineContextProps>({});

export default TimelineContext;
