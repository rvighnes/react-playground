import React from "react";
import styled from 'styled-components';

import { render, screen, cleanup } from "@testing-library/react";

import ProgressBarContext from "../common/context/ProgressBarContext";
import { ProgressBarDirection } from "../common/types";

import ValueBar, { ValueBarProps } from "./ValueBar";

const StyledContainer = styled.div`
  width: 100%;
  display: inline-block;

  position: relative;
  overflow: hidden;
`;

describe('ValueBar component tests', () => {
  beforeEach(cleanup);

  const customRenderAndGet = (args: {
    direction?: ProgressBarDirection,
    thickness?: number,
    isReversed?: boolean,
    valueProps?: ValueBarProps,
  } = {}): HTMLElement => {
    const { ref, as, ...valueProps } = args.valueProps || {};

    render(
      <ProgressBarContext.Provider
        value={{
          thickness: args.thickness || 10,
          direction: args.direction || 'horizontal',
        }}>
        <StyledContainer style={{ height: 10 }}>
          <ValueBar {...valueProps} />
        </StyledContainer>
      </ProgressBarContext.Provider>
    );

    return screen.getByTestId(`test-progress-bar__value-bar`);
  };

  test('should have the value-bar default class', () => {
    const el = customRenderAndGet();

    expect(el).toHaveClass('progress-bar__value-bar')
  });

  test('should have the horizontal class if direction is horizontal', () => {
    const el = customRenderAndGet();

    expect(el).toHaveClass('horizontal')
  });

  test('should have the vertical class if direction is vertical', () => {
    const el = customRenderAndGet({ direction: 'vertical' });

    expect(el).toHaveClass('vertical')
  });

  test('should not have the reversed class if isReversed is false', () => {
    const el = customRenderAndGet({ isReversed: false });
    expect(el).not.toHaveClass('reversed')
  });

  test('should have the reversed class if isReversed is true', () => {
    const el = customRenderAndGet({ isReversed: true });
    expect(el).not.toHaveClass('reversed')
  });

  test('should clamp the value (if less than 0) provided for the progress', () => {
    const el = customRenderAndGet({ valueProps: { value: -1 } });

    // Height for vertical
    expect(el).toHaveStyle('width: 0%');
  });

  test('should clamp the value (if greater than 100) provided for the progress', () => {
    const el = customRenderAndGet({ valueProps: { value: 142 } });

    // Height for vertical
    expect(el).toHaveStyle('width: 100%');
  });

  test('should set the value if between 0 and 100', () => {
    const el = customRenderAndGet({ valueProps: { value: 42 } });

    // Height for vertical
    expect(el).toHaveStyle('width: 42%');
  });
});
