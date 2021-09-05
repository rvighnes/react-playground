import React from "react";

import { render, screen, cleanup } from "@testing-library/react";

import TimelineConnector from "./TimelineConnector";

describe('TimelineConnector tests', () => {
  beforeEach(cleanup);

  it('should render the TimelineConnector on the screen', () => {
    const id = 'connector';
    render(<TimelineConnector testId={id} />);

    const connector = screen.queryByTestId(`test-${id}`);

    expect(connector).not.toBeNull();
  });

  it('should render the TimelineConnector in correct direction.', () => {
    const id = 'connector';
    render(<TimelineConnector direction={"horizontal"} testId={id} />);

    const connector = screen.getByTestId(`test-${id}`);
    expect(connector).toHaveStyle('width: 70px')
    expect(connector).toHaveStyle('height: 0')
  });

  it('should render the connector with opacity 0 if show is false', () => {
    const id = 'connector';
    render(<TimelineConnector testId={id} show={false} />);

    const connector = screen.getByTestId(`test-${id}`);
    expect(connector).toHaveStyle('opacity: 0')
  });
});
