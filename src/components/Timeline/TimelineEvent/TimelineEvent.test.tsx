import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineEvent, { TimelineEventProps } from "./TimelineEvent";

import TimelineContext, { TimelineContextProps } from "../common/context/TimelineContext";

describe('TimelineEvent tests', () => {
  const id = "my-timeline-event";

  beforeEach(cleanup);

  const customRenderAndGet = (props: any, contextValue: any = {}) => {
    render(
      <TimelineContext.Provider value={contextValue}>
        <TimelineEvent
          index={0}
          {...props}
          id={id}
        />
      </TimelineContext.Provider>
    );

    return screen.getByTestId(`test-${id}`);
  };

  it('should render the TimelineEvent component on the screen', () => {
    const el = customRenderAndGet({
      index: 0,
    } as TimelineEventProps);
    expect(el).not.toBeNull();
  });

  it('should have the "timeline-event" className', () => {
    const el = customRenderAndGet({
      index: 0,
    } as TimelineEventProps);
    expect(el).toHaveClass("timeline-event");
  });

  describe('Root element conditional classes based on "placement" and "direction"', () => {
    it('should have ".horizontal.after" classes if "placement" is "after" and "direction" is "horizontal"', () => {
      const el = customRenderAndGet({
        index: 0,
        placement: "after",
      } as TimelineEventProps, {
        direction: "horizontal",
      } as TimelineContextProps);
      expect(el).toHaveClass('horizontal');
      expect(el).toHaveClass('after');
    });

    it('should have ".horizontal.before" classes if "placement" is "before" and "direction" is "horizontal"', () => {
      const el = customRenderAndGet({
        index: 0,
        placement: "before",
      } as TimelineEventProps, {
        direction: "horizontal",
      } as TimelineContextProps);
      expect(el).toHaveClass('horizontal');
      expect(el).toHaveClass('before');
    });

    it('should have ".vertical.after" classes if "placement" is "after" and "direction" is "vertical"', () => {
      const el = customRenderAndGet({
        index: 0,
        placement: "after",
      } as TimelineEventProps, {
        direction: "vertical",
      } as TimelineContextProps);
      expect(el).toHaveClass('vertical');
      expect(el).toHaveClass('after');
    });

    it('should have ".vertical.before" classes if "placement" is "before" and "direction" is "vertical"', () => {
      const el = customRenderAndGet({
        index: 0,
        placement: "before",
      } as TimelineEventProps, {
        direction: "vertical",
      } as TimelineContextProps);
      expect(el).toHaveClass('vertical');
      expect(el).toHaveClass('before');
    });
  });

  describe('Root element content-separator gap', () => {
    it('should have the default "gap" if not provided', () => {
      const el = customRenderAndGet({});
      expect(el).toHaveStyle('gap: 15px');
    });

    it('should have the "0" as "gap" value if "0" is provided', () => {
      const el = customRenderAndGet({ separatorContentGap: 0 } as TimelineEventProps);
      expect(el).toHaveStyle('gap: 0');
    });

    it('should have the provided-numeric value as "gap" value if is provided', () => {
      const el = customRenderAndGet({ separatorContentGap: 40 } as TimelineEventProps);
      expect(el).toHaveStyle('gap: 40px');
    });

    it('should have the provided-string value as "gap" value if is provided', () => {
      const el = customRenderAndGet({ separatorContentGap: "42px" } as TimelineEventProps);
      expect(el).toHaveStyle('gap: 42px');
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
});
