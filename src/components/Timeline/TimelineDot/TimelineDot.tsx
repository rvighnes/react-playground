import React from "react";
import styled from "styled-components";
import classNames from "classnames";

const StyledDot = styled.div`
  width: 25px;
  height: 25px;
  position: relative;

  background-color: hsl(0, 0%, 90%);

  border: 1px solid hsl(0, 0%, 10%);
  border-radius: 50%;

  overflow: hidden;

  flex-shrink: 0;

  display: grid;
  place-items: center;
  cursor: auto;
`;

export interface TimelineDotProps extends React.HTMLProps<HTMLDivElement> {
}

/**
 * This component is for representing the DOT in the Timeline component. You can extend
 * this component via styled-components too.
 *
 * @param props {TimelineDotProps}
 * @returns {JSX.Element}
 */
const TimelineDot = React.forwardRef<HTMLDivElement, TimelineDotProps>((props, ref) => {
  const {
    className,
    ref: _,
    as: __,   // Conflicts with the HTML element,
    ...others
  } = props;

  return (
    <StyledDot
      data-testid={`test-${props.id || 'timeline-dot'}`}
      className={classNames([
        "timeline-event__separator-dot",
        className || '',
      ])}
      ref={ref}
      {...others}
    >
      {props.children}
    </StyledDot>
  );
});

export default TimelineDot;

TimelineDot.defaultProps = {
  style: {},
};
