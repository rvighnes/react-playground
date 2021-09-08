import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineOppositeContent from "./TimelineOppositeContent";

describe('TimelineContent component tests', () => {
  const id = 'timeline-opposite-content';

  beforeEach(cleanup);

  it('should render the itself on the screen', () => {
    render(
      <TimelineOppositeContent id={id} />
    );

    const el = screen.queryByTestId(`test-${id}`);
    expect(el).not.toBeNull();
  });

  it('should render the children passed to it on the screen', () => {
    render(
      <TimelineOppositeContent id={id}>
        Hello all
      </TimelineOppositeContent>
    );

    const el = screen.queryByText('Hello all');
    expect(el).not.toBeNull();
  });

  it('should have the default "flex: 1" style', () => {
    render(
      <TimelineOppositeContent id={id} />
    );

    const el = screen.queryByTestId(`test-${id}`);
    expect(el).toHaveStyle('flex: 1');
  });

  it('should have the default class name for timeline-opposite-content', () => {
    render(
      <TimelineOppositeContent id={id} />
    );

    const el = screen.queryByTestId(`test-${id}`);
    expect(el).toHaveClass('timeline-event__opposite-content');
  });

  it('should have the additional class names passed to it', () => {
    render(
      <TimelineOppositeContent id={id} className="hello world" />
    );

    const el = screen.queryByTestId(`test-${id}`);
    expect(el).toHaveClass('hello');
    expect(el).toHaveClass('world');
  });
});
