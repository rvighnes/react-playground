import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { PlacementWithAlternate, Placement, Direction } from "./common/types";

import TimelineContext, { TimelineContextProps } from "./common/context/TimelineContext";

const StyledTimeline = styled.ul`
  padding-inline-start: 0;
  display: flex;

  /* Can be overridden by setting the "eventGap" prop */
  gap: 10px;

  font-family: 'Roboto', sans-serif;

  &.timeline-horizontal {flex-direction: row;}
  &.timeline-vertical {flex-direction: column;}
`;
export interface TimelineProps extends React.HTMLProps<HTMLUListElement> {
  /**
   * The position where the timeline's content should appear.
   */
  placement?: PlacementWithAlternate;

  /**
   * From which side the alternate placement should begin from.
   * Considered only if "placement" is "alternate".
   */
  placementStart?: Placement;

  /**
   * Whether the timeline should be presented horizontally or vertically
   */
  direction?: Direction;

  /**
   * Sets the gap between consecutive events
   */
  eventGap?: React.CSSProperties['gap'];

  /**
   * If opposite content is not there, then its space will shrunk to 0.
   */
  showOnlyOneSide?: boolean;
}

/**
 * The timeline displays a list of events in chronological order.
 *
 * @param props {React.PropsWithChildren<TimelineProps>}
 * @returns {JSX.Element}
 */
const Timeline = React.forwardRef<HTMLUListElement, TimelineProps>((props, ref): JSX.Element => {
  const {
    direction,
    placement,
    placementStart,
    showOnlyOneSide,
    className,
    eventGap,
    style = {},
    ref: _,
    children,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;

  const timelineContextValue = React.useMemo<TimelineContextProps>(() => ({
    placement,
    placementStart,
    direction,
    showOnlyOneSide,
  }), [placement, placementStart, direction, showOnlyOneSide]);

  const derivedStyles: React.CSSProperties = {
    gap: eventGap,
  };

  return (
    <TimelineContext.Provider value={timelineContextValue}>
      <StyledTimeline
        data-testid={`test-${others.id || 'timeline'}`}
        className={classNames([
          "timeline",
          `timeline-${direction}`,
          className || '',
        ])}
        style={Object.assign({}, derivedStyles, style)}
        ref={ref}
        {...others}
      >
        {props.children}
      </StyledTimeline>
    </TimelineContext.Provider>
  );
});

export default Timeline;

Timeline.defaultProps = {
  placement: 'after' as PlacementWithAlternate,
  placementStart: 'after' as Placement,
  direction: 'vertical' as Direction,
  showOnlyOneSide: false,
};
