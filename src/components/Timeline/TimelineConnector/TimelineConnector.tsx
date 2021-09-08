import classNames from "classnames";
import React from "react";
import styled from "styled-components";

import TimelineContext from "../common/context/TimelineContext";

const StyledTimelineConnector = styled.div`
  flex-shrink: 0;
`;

export interface TimelineConnectorProps extends React.HTMLProps<HTMLDivElement> {
  /**
  * Length of the connector line
  */
  length?: string | number;

  /**
  * Color of the connector line
  */
  color?: string;

  /**
  * Type of connector line
  */
  type?: 'solid' | 'dashed' | 'dotted';

  /**
  * Thickness of the connector line
  */
  thickness?: string | number;
}

/**
 * TimelineConnector component is used as a line-separator between different events in
 * the Timeline component
 */
const TimelineConnector = React.forwardRef<HTMLDivElement, TimelineConnectorProps>((props, ref) => {
  const {
    className,
    style: elStyle,
    length,
    color,
    type,
    thickness,
    ref: _,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;
  const parent = React.useContext(TimelineContext);

  const derivedStyles: React.CSSProperties = {
    borderWidth: 0,
    border: `${type} ${color}`,

    // Need to use the following instead of flex-basis because
    // it overflows the container with flex-basis.
    width: parent.direction === 'horizontal' ? props.length : 0,
    height: parent.direction === 'vertical' ? props.length : 0,

    borderTopWidth: parent.direction === 'horizontal' ? thickness : 0,
    borderBottomWidth: 0,
    borderLeftWidth: parent.direction === 'vertical' ? thickness : 0,
    borderRightWidth: 0,
  };

  return (
    <StyledTimelineConnector
      data-testid={`test-${props.id || 'connector'}`}
      className={classNames([
        "timeline-event__separator-connector",
        className || '',
      ])}
      style={Object.assign({}, derivedStyles, elStyle)}
      ref={ref}
      {...others}
    />
  );
});

export default TimelineConnector;

TimelineConnector.defaultProps = {
  length: 70,
  color: 'hsl(0, 0%, 70%)',
  type: 'solid' as 'solid',
  thickness: 2,
};
