import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import { ProgressBarVariant, ProgressBarDirection } from "./common/types";
import ProgressBarContext, { ProgressBarContextProps } from "./common/context/ProgressBarContext";

const StyledProgressBar = styled.div`
  position: relative;
  overflow: hidden;
`;

export interface ProgressBarProps extends React.HTMLProps<HTMLDivElement> {
  /**
   * The type of progress bar
   */
  variant?: ProgressBarVariant;

  /**
   * Direction of the progress bar. If "vertical", either need to set the height
   * for the progress bar or set the container height.
   */
  direction?: ProgressBarDirection;

  /**
   * Whether the progress/buffer will start from start or end
   */
  isReversed?: boolean;

  /**
   * Thickness of the bar. Width, when vertical. Height, when horizontal.
   */
  thickness?: React.CSSProperties['flexBasis'];

  /**
   * Background color of the progress bar
   */
  backgroundColor?: React.CSSProperties['backgroundColor'];
}

/**
 * Progress indicators inform users about the status of ongoing processes,
 * such as loading an app, submitting a form, or saving updates. They
 * communicate an app’s state and indicate available actions, such as whether
 * users can navigate away from the current screen.
 *
 * * Determinate indicators display how long an operation will take.
 * * Indeterminate indicators visualize an unspecified wait time.
 *
 * @param props {React.PropsWithChildren<ProgressBarProps>}
 * @returns {JSX.Element}
 */
const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>((props, ref) => {
  const {
    className,
    children,
    variant,
    direction,
    isReversed,
    thickness,
    backgroundColor,
    style,
    ref: _,
    as: __,
    ...others
  } = props;

  const derivedStyles: React.CSSProperties = {
    width: direction === 'horizontal' ? '100%' : thickness,
    height: direction === 'vertical' ? '100%' : thickness,
    backgroundColor,
  };

  const getClassNames = () => classNames([
    "progress-bar",
    className || '',
  ]);

  const contextValue = React.useMemo<ProgressBarContextProps>(() => ({
    variant,
    direction,
    thickness,
    isReversed
  }), [variant, direction, thickness, isReversed]);

  return (
    <ProgressBarContext.Provider value={contextValue}>
      <StyledProgressBar
        data-testid={`test-${props.id || 'progress-bar'}`}
        ref={ref}
        className={getClassNames()}
        style={Object.assign({}, derivedStyles, style)}
        {...others}
      >
        {children}
      </StyledProgressBar>
    </ProgressBarContext.Provider>
  );
});

export default ProgressBar;

ProgressBar.defaultProps = {
  variant: 'determinate',
  direction: 'horizontal',
  isReversed: false,
  thickness: 10,
  backgroundColor: 'hsl(0, 0%, 90%)'
};
