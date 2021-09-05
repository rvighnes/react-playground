import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import Timeline from "./Timeline";

describe('Timeline component tests', () => {
  const id = "my-timeline";

  beforeEach(cleanup);

  it('should render the timeline component on the screen', () => {
    render(
      <Timeline
        id={id}
        events={[]}
      />
    );

    const el = screen.queryByTestId(`test-${id}`);
    expect(el).not.toBeNull();
  });

  describe('"timeline-horizontal" class tests', () => {
    const renderAndGet = (isHorizontal: boolean = true): HTMLElement => {
      render(
        <Timeline
          id={id}
          events={[]}
          direction={isHorizontal ? "horizontal" : "vertical"}
        />
      );

      return screen.getByTestId(`test-${id}`);
    };

    it('should have the "timeline-horizontal" class if the direction is horizontal', () => {
      const el = renderAndGet(true);
      expect(el).toHaveClass('timeline-horizontal')
    });

    it('should not have the "timeline-horizontal" class if the direction is vertical', () => {
      const el = renderAndGet(false);
      expect(el).not.toHaveClass('timeline-horizontal')
    });
  });
});
