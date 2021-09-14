import React from "react";

import { ProgressBarVariant, ProgressBarDirection } from "../types";

export interface ProgressBarContextProps {
  variant?: ProgressBarVariant;
  direction?: ProgressBarDirection;
  thickness?: React.CSSProperties['flexBasis'];
  isReversed?: boolean;
}

const ProgressBarContext = React.createContext<ProgressBarContextProps>({});

export default ProgressBarContext;
