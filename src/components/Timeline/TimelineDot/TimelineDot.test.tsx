import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineDot from "./TimelineDot";

describe('TimelineDot tests', () => {
  beforeEach(cleanup);

  it('should render the TimelineDot component on the screen', () => {
    const id = "my-dot";
    render(<TimelineDot testId={id} />);

    const dot = screen.queryByTestId(`test-${id}`);

    expect(dot).not.toBeNull();
  });
});
