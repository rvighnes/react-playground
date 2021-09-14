import React from "react";
import styled from "styled-components";
import classNames from "classnames";

import ValueBar, { ValueBarProps } from "./ValueBar";

const StyledValueBar = styled(ValueBar)`
  z-index: 2;
`;

const Progress = React.forwardRef<HTMLDivElement, ValueBarProps>((props, ref) => {
  const {
    className,
    backgroundColor,
    value,
    ref: _,
    as: __,
    ...others
  } = props;

  return (
    <StyledValueBar
      className={classNames([className, 'progress-bar__value-bar--progress'])}
      ref={ref}
      value={value}
      backgroundColor={backgroundColor}
      {...others}
    />
  );
});

export default Progress;
