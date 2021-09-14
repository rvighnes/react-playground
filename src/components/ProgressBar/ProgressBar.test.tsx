import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import ProgressBar, { ProgressBarProps } from "./ProgressBar";


describe('ProgressBar component tests', () => {
  beforeEach(cleanup);

  const customRenderAndGet = ({ ref, as, ...props }: ProgressBarProps = {}): HTMLElement => {
    render(
      <ProgressBar {...props} />
    );

    return screen.getByTestId(`test-progress-bar`);
  };

  it('should have the default progress-bar class', () => {
    const el = customRenderAndGet();

    expect(el).toHaveClass('progress-bar');
  });

  it('should set the width to 100% if direction is horizontal', () => {
    const el = customRenderAndGet();

    expect(el).toHaveStyle('width: 100%');
  });

  it('should set the height to 100% if direction is vertical', () => {
    const el = customRenderAndGet({ direction: 'vertical' });

    expect(el).toHaveStyle('height: 100%');
  });
});
