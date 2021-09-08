import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import TimelineContext from "../common/context/TimelineContext";
import { Direction } from "../common/types";

const StyledTimelineSeparator = styled.div`
  display: flex;
  align-items: center;

  flex-shrink: 0;

  /* Can be overridden by passing the gap prop */
  gap: 5px;

  &.horizontal {flex-direction: row;}
  &.vertical {flex-direction: column;}
`;

interface TimelineSeparatorProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Gap between "dot" and "connector"
   */
  gap?: React.CSSProperties['gap'];
}

/**
 * Separator component which consists of dot and connector. Should not be used outside of
 * the timeline component. 😛
 */
const TimelineSeparator = React.forwardRef<HTMLDivElement, TimelineSeparatorProps>((props, ref) => {
  const {
    className,
    gap,
    style = {},
    ref: _,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;
  const parent = React.useContext(TimelineContext);

  const derivedStyles: React.CSSProperties = {
    gap,
  };

  return (
    <StyledTimelineSeparator
      data-testid={`test-${props.id || "timeline-event__separator"}`}
      className={classNames([
        'timeline-event__separator',
        className || '',
        parent.direction as Direction,
      ])}
      style={Object.assign({}, derivedStyles, style)}
      ref={ref}
      {...others}
    >
      {props.children}
    </StyledTimelineSeparator>
  );
});

export default TimelineSeparator;
