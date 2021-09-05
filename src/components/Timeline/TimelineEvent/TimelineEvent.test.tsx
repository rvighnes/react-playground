import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineEvent from "./TimelineEvent";

import { Direction, AlignDirection } from "../common/types";

describe('TimelineEvent tests', () => {
  const id = "my-timeline-event";

  beforeEach(cleanup);

  it('should render the TimelineEvent component on the screen', () => {
    render(<TimelineEvent id={id} content={''} />);

    const el = screen.queryByTestId(`test-${id}`);
    expect(el).not.toBeNull();
  });

  describe('Root element conditional flex styles', () => {
    const customRenderAndGet = (direction: Direction, alignSelf: AlignDirection): HTMLElement => {
      render(
        <TimelineEvent
          id={id}
          content={''}
          direction={direction}
          alignSelf={alignSelf}
        />
      );
      return screen.getByTestId(`test-${id}`);
    };

    it('should set "flexDirection" as "row-reverse" if "alignSelf" is "after" and "direction" is "vertical"', () => {
      const el = customRenderAndGet("vertical", "after");
      expect(el).toHaveStyle('flex-direction: row-reverse');
    });

    it('should set "flexDirection" as "column-reverse" if "alignSelf" is "after" and "direction" is "horizontal"', () => {
      const el = customRenderAndGet("horizontal", "after");
      expect(el).toHaveStyle('flex-direction: column-reverse');
    });

    it('should set "flexDirection" as "row" if "alignSelf" is "before" and "direction" is "vertical"', () => {
      const el = customRenderAndGet("vertical", "before");
      expect(el).toHaveStyle('flex-direction: row');
    });

    it('should set "flexDirection" as "column" if "alignSelf" is "before" and "direction" is "horizontal"', () => {
      const el = customRenderAndGet("horizontal", "before");
      expect(el).toHaveStyle('flex-direction: column');
    });
  });

  describe('Root element content-separator gap', () => {
    const customRenderAndGet = (contentGap?: string | number): HTMLElement => {
      render(
        <TimelineEvent
          id={id}
          content={''}
          separator={{
            gaps: { content: contentGap }
          }}
        />
      );
      return screen.getByTestId(`test-${id}`);
    };

    it('should have the default "gap" if not provided', () => {
      const el = customRenderAndGet();
      expect(el).toHaveStyle('gap: 15px');
    });

    it('should have the "0" as "gap" value if "0" is provided', () => {
      const el = customRenderAndGet(0);
      expect(el).toHaveStyle('gap: 0');
    });

    it('should have the provided-numeric value as "gap" value if is provided', () => {
      const el = customRenderAndGet(10);
      expect(el).toHaveStyle('gap: 10px');
    });

    it('should have the provided-string value as "gap" value if is provided', () => {
      const el = customRenderAndGet("22px");
      expect(el).toHaveStyle('gap: 22px');
    });
  });

  describe('Separator element tests', () => {
    describe('conditional classes', () => {
      const customRenderAndGet = (direction: Direction): HTMLElement => {
        render(
          <TimelineEvent
            id={id}
            content={''}
            direction={direction}
          />
        );
        return screen.getByTestId(`test-${id}`).querySelector('.timeline-event__separator') as HTMLElement;
      };

      it('should have the "timeline-event__separator--vertical" if the "direction" is "vertical"', () => {
        const el = customRenderAndGet("vertical");
        expect(el).toHaveClass('timeline-event__separator--vertical');
      });

      it('should not have the "timeline-event__separator--vertical" if the "direction" is "horizontal"', () => {
        const el = customRenderAndGet("horizontal");
        expect(el).not.toHaveClass('timeline-event__separator--vertical');
      });
    });

    describe('separator gap', () => {
      const customRenderAndGet = (dotAndConnectorGap?: string | number): HTMLElement => {
        render(
          <TimelineEvent
            id={id}
            content={''}
            separator={{
              gaps: { dotAndConnector: dotAndConnectorGap }
            }}
          />
        );
        return screen.getByTestId(`test-${id}`).querySelector('.timeline-event__separator') as HTMLElement;
      };

      it('should have the default "gap" if not provided', () => {
        const el = customRenderAndGet();
        expect(el).toHaveStyle('gap: 5px');
      });

      it('should have the "0" as "gap" value if "0" is provided', () => {
        const el = customRenderAndGet(0);
        expect(el).toHaveStyle('gap: 0');
      });

      it('should have the provided-numeric value as "gap" value if is provided', () => {
        const el = customRenderAndGet(10);
        expect(el).toHaveStyle('gap: 10px');
      });

      it('should have the provided-string value as "gap" value if is provided', () => {
        const el = customRenderAndGet("22px");
        expect(el).toHaveStyle('gap: 22px');
      });
    });
  });
});
