import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { AlignDirection, Separator, Direction } from "../common/types";

import TimelineDot from "../TimelineDot";
import TimelineConnector from "../TimelineConnector";

const StyledTimelineEvent = styled.li`
  list-style: none;
  display: flex;

  // Could be overridden by setting: separator.gaps.content
  gap: 15px;

  &:focus {
    outline: 1px solid blue;
  }

  .timeline-event__content,
  .timeline-event__opposite-content {
    flex: 1;
  }

  .timeline-event__separator {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    // Could be overridden by setting: separator.gaps.dotAndConnector
    gap: 5px;
  }

  .timeline-event__separator--vertical {
    flex-direction: column;
  }
`;

/**
 * Configuration of each individual event in a timeline
 */
export interface TimelineEventProps {
  id: string;

  direction?: Direction;

  /**
   * Override parent timeline's alignment order for current item.
   */
  alignSelf?: AlignDirection;

  /**
   * Overrides parent's separator configuration
   */
  separator?: Separator;

  /**
   * Timeline event content which describes the event.
   */
  content: JSX.Element | string;

  /**
   * Content flex value
   */
  contentFlexValue?: React.CSSProperties['flex'];

  /**
   * This content will appear on the opposite side of the content
   */
  oppositeContent?: JSX.Element | string;

  /**
   * Opposite content flex value
   */
  oppositeContentFlexValue?: React.CSSProperties['flex'];

  /**
   * Click handler for event
   */
  clickHandler?: (id: string) => void;
}

/**
 * Timeline event is the individual event inside a timeline.
 *
 * @param props {TimelineEventProps}
 * @returns {JSX.Element}
 */
const TimelineEvent: React.FC<TimelineEventProps> = (props) => {
  const isDirectionHorizontal = props.direction === "horizontal";
  const isDirectionVertical = props.direction === "vertical";

  const getSeparatorClassNames = (): string => {
    return classNames([
      'timeline-event__separator',
      {'timeline-event__separator--vertical': isDirectionVertical},
    ]);
  };

  const clickHandler = () => {
    if (props.clickHandler) {
      props.clickHandler(props.id);
    }
  };

  // For accessibility
  const keyPressHandler: React.KeyboardEventHandler<HTMLLIElement> = (e) => {
    if (e.key === 'Enter') {
      clickHandler();
    }
  };

  return (
    <StyledTimelineEvent
      tabIndex={1}
      data-testid={`test-${props.id}`}
      className={'timeline-event'}
      style={{
        marginTop: isDirectionVertical ? (props.separator?.gaps?.betweenEvents || 0) : 0,
        marginLeft: isDirectionHorizontal ? (props.separator?.gaps?.betweenEvents || 0) : 0,
        flexDirection: `${(isDirectionVertical ? 'row' : 'column')}${props.alignSelf === "after" ? "-reverse" : ""}`,
        gap: props.separator?.gaps?.content,
      }}
      onClick={clickHandler}
      onKeyPress={keyPressHandler}
    >
      <div
        className="timeline-event__content"
        style={{flex: props.contentFlexValue}}
      >
        {props.content}
      </div>
      <div
        className={getSeparatorClassNames()}
        style={{ gap: props.separator?.gaps?.dotAndConnector }}
      >
        <TimelineDot {...props.separator?.dot} />
        <TimelineConnector
          direction={props.direction}
          {...props.separator?.connector}
        />
      </div>
      <div
        className="timeline-event__opposite-content"
        style={{flex: props.oppositeContentFlexValue}}
      >
        {props.oppositeContent}
      </div>
    </StyledTimelineEvent>
  );
};

export default TimelineEvent;

TimelineEvent.defaultProps = {
  direction: 'vertical',
  alignSelf: 'after',
};
