import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineDot from "./TimelineDot";

describe('TimelineDot tests', () => {
  beforeEach(cleanup);

  it('should render the TimelineDot component on the screen', () => {
    const id = "my-dot";
    render(<TimelineDot id={id} />);

    const dot = screen.queryByTestId(`test-${id}`);

    expect(dot).not.toBeNull();
  });

  it('should render the children inside the TimelineDot component on the screen', () => {
    const id = "my-dot";
    render(
      <TimelineDot id={id}>
        RV
      </TimelineDot>
    );

    const dot = screen.queryByText(`RV`);

    expect(dot).not.toBeNull();
  });
});
