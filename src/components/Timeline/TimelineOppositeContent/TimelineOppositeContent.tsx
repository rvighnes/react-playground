import React, { useEffect } from "react";
import styled from "styled-components";
import classNames from "classnames";

import TimelineEventContext from "../common/context/TimelineEventContext";

const StyledTimelineOppositeContent = styled.div`
  flex: 1;
  flex-shrink: 0;
`;

interface TimelineOppositeContentProps extends React.HTMLProps<HTMLDivElement> {
}

const TimelineOppositeContent = React.forwardRef<HTMLDivElement, TimelineOppositeContentProps>((props, ref) => {
  const {
    className,
    ref: _,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;

  const timelineEventContext = React.useContext(TimelineEventContext);

  useEffect(() => {
    if (timelineEventContext) {
      timelineEventContext.setHasOppositeContent(true);
    }
  }, [timelineEventContext]);

  return (
    <StyledTimelineOppositeContent
      data-testid={`test-${props.id || 'timeline-opposite-content'}`}
      className={classNames([
        'timeline-event__opposite-content',
        className || '',
      ])}
      ref={ref}
      {...others}
    >
      {props.children}
    </StyledTimelineOppositeContent>
  )
});

export default TimelineOppositeContent;
