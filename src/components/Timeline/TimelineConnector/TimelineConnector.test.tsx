import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineConnector from "./TimelineConnector";
import TimelineContext from "../common/context/TimelineContext";

describe('TimelineConnector tests', () => {
  const id = 'connector';
  beforeEach(cleanup);

  it('should render the itself on the screen', () => {
    render(<TimelineConnector id={id} />);

    const connector = screen.queryByTestId(`test-${id}`);

    expect(connector).not.toBeNull();
  });

  it('should have the default length for itself in horizontal direction.', () => {
    render(
      <TimelineContext.Provider value={{ direction: 'horizontal' }}>
        <TimelineConnector id={id} />
      </TimelineContext.Provider>
    );

    const connector = screen.getByTestId(`test-${id}`);
    expect(connector).toHaveStyle('width: 70px');   // Default length
  });

  it('should render the TimelineConnector in horizantal direction.', () => {
    render(
      <TimelineContext.Provider value={{ direction: 'horizontal' }}>
        <TimelineConnector id={id} />
      </TimelineContext.Provider>
    );

    const connector = screen.getByTestId(`test-${id}`);
    expect(connector).toHaveStyle('border-top-width: 2px');  // default border width
    expect(connector).toHaveStyle('border-left-width: 0');
  });

  it('should render the TimelineConnector in vertical direction.', () => {
    render(
      <TimelineContext.Provider value={{ direction: 'vertical' }}>
        <TimelineConnector id={id} />
      </TimelineContext.Provider>
    );

    const connector = screen.getByTestId(`test-${id}`);
    expect(connector).toHaveStyle('border-top-width: 0');
    expect(connector).toHaveStyle('border-left-width: 2px');    // default border width
  });
});
