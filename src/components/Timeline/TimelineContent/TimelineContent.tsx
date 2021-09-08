import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const StyledTimelineContent = styled.div`
  flex: 1;
  flex-shrink: 0;
`;

interface TimelineContentProps extends React.HTMLProps<HTMLDivElement> {
}

const TimelineContent = React.forwardRef<HTMLDivElement, TimelineContentProps>((props, ref) => {
  const {
    className,
    ref: _,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;

  return (
    <StyledTimelineContent
      data-testid={`test-${props.id || 'timeline-content'}`}
      className={classNames([
        'timeline-event__content',
        className || '',
      ])}
      ref={ref}
      {...others}
    >
      {props.children}
    </StyledTimelineContent>
  )
});

export default TimelineContent;
