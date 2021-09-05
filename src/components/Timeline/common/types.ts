import { TimelineDotProps } from "../TimelineDot";
import { TimelineConnectorProps } from "../TimelineConnector";

export type AlignDirection = 'before' | 'after';
export type Align = AlignDirection | 'alternate';
export type Direction = "vertical" | "horizontal";
export type Show = 'both' | 'only-content';

export interface Separator {
  dot?: TimelineDotProps;
  connector?: TimelineConnectorProps;
  gaps?: {
    dotAndConnector?: string | number;
    content?: string | number;
    betweenEvents?: string | number;
  };
};
