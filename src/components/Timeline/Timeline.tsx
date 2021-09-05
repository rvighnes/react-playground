import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { Align, AlignDirection, Separator } from "./common/types";
import { getMergedSeparator, getEventAlignDirection } from "./common/util";
import TimelineEvent, { TimelineEventProps } from "./TimelineEvent";

const StyledTimeline = styled.ul`
  padding-inline-start: 0;

  &.timeline-horizontal {
    display: flex;
  }
`;

export interface TimelineProps {
  id: string;

  /**
   * The position where the timeline's content should appear.
   */
  align?: Align;

  /**
   * From which side the alternate alignment begin from. Considered only if "align" is "alternate".
   */
  alignStart?: AlignDirection;

  /**
   * Whether the timeline should be presented horizontally or vertically
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * Item separator configuration for all items.
   */
  separator?: Separator;

  /**
   * Array of events - REQUIRED
   */
  events: TimelineEventProps[];

  /**
   * Content flex value for all the events
   */
  contentFlexValue?: React.CSSProperties['flex'];

  /**
  * Opposite content flex value for all the events.
  */
  oppositeContentFlexValue?: React.CSSProperties['flex'];

  /**
   * Click handler for events
   */
  clickHandler?: (id: string) => void;
}

/**
 * The timeline displays a list of events in chronological order.
 *
 * @param props {TimelineProps}
 * @returns {JSX.Element}
 */
const Timeline: React.FC<TimelineProps> = (props): JSX.Element => {
  const isHorizontal = props.direction === "horizontal";

  return (
    <StyledTimeline
      data-testid={`test-${props.id}`}
      className={classNames([
        "timeline",
        { "timeline-horizontal": isHorizontal }
      ])}
    >
      {props.events.map((timelineEvent: TimelineEventProps, index: number) => (
        <TimelineEvent
          key={timelineEvent.id}
          direction={props.direction}
          {...timelineEvent}
          alignSelf={timelineEvent.alignSelf || getEventAlignDirection({
            index,
            align: props.align as Align,
            alignStart: props.alignStart,
          })}
          separator={getMergedSeparator(props.separator, timelineEvent.separator)}
          contentFlexValue={timelineEvent.contentFlexValue || props.contentFlexValue}
          oppositeContentFlexValue={timelineEvent.oppositeContentFlexValue || props.oppositeContentFlexValue}
          clickHandler={timelineEvent.clickHandler || props.clickHandler}
        />
      ))}
    </StyledTimeline>
  );
};

export default Timeline;

Timeline.defaultProps = {
  align: 'after',
  alignStart: 'after',
  direction: 'vertical',
};
