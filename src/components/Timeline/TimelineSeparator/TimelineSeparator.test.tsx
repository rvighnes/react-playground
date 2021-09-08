import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineContext from "../common/context/TimelineContext";

import TimelineSeparator from "./TimelineSeparator";
import TimelineDot from "../TimelineDot";
import TimelineConnector from "../TimelineConnector";

describe('TimelineSeparator component tests', () => {
  const id = "my-separator";

  beforeEach(cleanup);

  const customRenderAndGet = (args: any): HTMLElement => {
    render(
      <TimelineContext.Provider value={{ direction: args.direction || 'vertical' }}>
        <TimelineSeparator id={id} gap={args.gap} style={args.style}>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
      </TimelineContext.Provider>
    );

    return screen.getByTestId(`test-${id}`);
  };

  it('should render the itself on the screen', () => {
    const el = customRenderAndGet({});
    expect(el).not.toBeNull();
  });

  it('should have the "timeline-event__separator" class', () => {
    const el = customRenderAndGet({});
    expect(el).toHaveClass('timeline-event__separator');
  });

  it('should have the direction as class value', () => {
    const el = customRenderAndGet({ direction: "horizontal" });
    expect(el).toHaveClass('horizontal');
  });

  it('should have the default gap value as 5', () => {
    const el = customRenderAndGet({});
    expect(el).toHaveStyle('gap: 5px');
  });

  it('should override the gap value if provided as props', () => {
    const el = customRenderAndGet({
      gap: 10,
    });
    expect(el).toHaveStyle('gap: 10px');
  });

  it('should override the default gap value if provided in styles', () => {
    const el = customRenderAndGet({
      style: {
        gap: 15,
      },
    });
    expect(el).toHaveStyle('gap: 15px');
  });

  it('should make sure that gap value in styles take more precedence than the gap value as prop.', () => {
    const el = customRenderAndGet({
      gap: 41,
      style: {
        gap: 42,
      },
    });
    expect(el).toHaveStyle('gap: 42px');
  });
});
