import React, { useMemo } from "react";
import styled from "styled-components";
import classNames from "classnames";

import { Placement, PlacementWithAlternate } from "../common/types";
import {getEventPlacement} from "../common/util";
import TimelineContext from "../common/context/TimelineContext";
import TimelineEventContext from "../common/context/TimelineEventContext";

const StyledTimelineEvent = styled.li`
  list-style: none;
  display: flex;
  align-items: stretch;

  /* Could be overridden by setting the "separatorContentGap" value */
  gap: 15px;

  &.timeline-event__opposite-content-placeholder:before {
    content: "";
    flex: 1;
  }

  .timeline-event__separator {order: 2;}

  &.horizontal {flex-direction: column;}
  &.vertical {flex-direction: row;}

  &.before {
    .timeline-event__content {order: 1;}

    .timeline-event__opposite-content {order: 3;}
    &.timeline-event__opposite-content-placeholder:before {order: 3;}
  }

  &.after {
    .timeline-event__content {order: 3;}

    .timeline-event__opposite-content {order: 1;}
    &.timeline-event__opposite-content-placeholder:before {order: 1;}
  }
`;

/**
 * Configuration of each individual event in a timeline
 */
export interface TimelineEventProps extends React.HTMLProps<HTMLLIElement> {
  /**
   * Needed for computing the "placement" when the placement defined in parent
   * is alternate.
   */
  index: number;

  /**
   * Override the parent timeline's placement order for current event.
   */
  placement?: Placement;

  /**
   * Gap between the separator and content/opposite-content
   */
  separatorContentGap?: React.CSSProperties['gap'];
}

/**
 * Timeline event is the individual event inside a timeline.
 *
 * @param props {TimelineEventProps}
 * @returns {JSX.Element}
 */
const TimelineEvent = React.forwardRef<HTMLLIElement, TimelineEventProps>((props, ref) => {
  const {
    index,
    className,
    style = {},
    separatorContentGap,
    placement: _placement,
    ref: _,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;
  const parent = React.useContext(TimelineContext);
  const [hasOppositeContent, setHasOppositeContent] = React.useState(false);

  const direction = parent.direction;
  const placement = _placement || getEventPlacement({
    index: props.index,
    placement: parent.placement as PlacementWithAlternate,
    placementStart: parent.placementStart as Placement,
  });

  const derivedStyles: React.CSSProperties = {
    gap: separatorContentGap,
  };

  return (
    <TimelineEventContext.Provider
      value={useMemo(() => ({
        hasOppositeContent,
        setHasOppositeContent,
      }), [hasOppositeContent, setHasOppositeContent])}
    >
    <StyledTimelineEvent
      data-testid={`test-${props.id || 'timeline-event'}`}
      className={classNames([
        'timeline-event',
        className || '',
        placement,
        direction,
        {'timeline-event__opposite-content-placeholder': hasOppositeContent === false && parent.showOnlyOneSide === false},
      ])}
      style={Object.assign({}, derivedStyles, style)}
      ref={ref}
      {...others}
    >
      {props.children}
    </StyledTimelineEvent>
    </TimelineEventContext.Provider>
  );
});

export default TimelineEvent;

TimelineEvent.defaultProps = {
};
