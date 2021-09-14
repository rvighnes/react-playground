import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import ProgressBarContext from "../common/context/ProgressBarContext";

const StyledValueBar = styled.div`
  position: absolute;

  &.horizontal {
    top: 0;
    bottom: 0;
    left: 0;
  }

  &.horizontal.reversed {
    top: 0;
    right: 0;
    bottom: 0;
    left: unset;
  }

  &.vertical {
    top: 0;
    right: 0;
    left: 0;
  }

  &.vertical.reversed {
    top: unset;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export interface ValueBarProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * Amount of progress made in percent (Between 0 and 100)
   *
   * Note: Ignored, if variant is "indeterminate"
   */
  value?: number;

  /**
   * Background color of the progress bar
   */
  backgroundColor?: React.CSSProperties['backgroundColor'];
}

/**
 * This component is responsible for rendering the Progress value in the progress bar.
 * Internal component and not intended to be used by the consumer of this component. 😛
 * Use <Progress /> and/or <Buffer /> component within <ProgressBar /> instead.
 */
const ValueBar = React.forwardRef<HTMLDivElement, ValueBarProps>((props, ref) => {
  const {
    className,
    children,
    style,
    backgroundColor,
    value,
    ref: _,
    as: __,
    ...others
  } = props;
  const parent = React.useContext(ProgressBarContext);

  const clampedValue = Math.min(Math.max(0, value), 100);

  const derivedStyles: React.CSSProperties = {
    width: parent.direction === "horizontal" ? `${clampedValue}%` : parent.thickness,
    height: parent.direction === "vertical" ? `${clampedValue}%` : parent.thickness,
    backgroundColor,
  };

  const getClassNames = () => classNames([
    "progress-bar__value-bar",
    parent.direction,
    { reversed: parent.isReversed },
    className || '',
  ]);

  return (
    <StyledValueBar
      data-testid={`test-${props.id || 'progress-bar__value-bar'}`}
      ref={ref}
      className={getClassNames()}
      style={Object.assign({}, derivedStyles, style)}
      {...others}
    />
  );
});

export default ValueBar;

ValueBar.defaultProps = {
  backgroundColor: 'hsl(0, 0%, 40%)',
  value: 0,
}
