import React from "react";

const defaultStyles: React.CSSProperties = {
  display: 'inline-block',
};

export interface TimelineConnectorProps {
  testId?: string;

  /**
  * Should the connector line be shown in the UI
  */
  show?: boolean;

  /**
  * Length of the connector line
  */
  length?: string | number;

  /**
  * Color of the connector line
  */
  color?: string;

  /**
  * Type of connector line
  */
  type?: 'solid' | 'dashed' | 'dotted';

  /**
  * Thickness of the connector line
  */
  thickness?: string | number;

  /**
   * If the connector line should be horizontal or vertical
   */
  direction?: 'horizontal' | 'vertical';
}

/**
 * TimelineConnector component is used as a line-separator between different events in
 * the Timeline component
 */
const TimelineConnector: React.FC<TimelineConnectorProps> = (props) => {
  const borderWidth = typeof props.thickness === "number" ? `${props.thickness}px` : props.thickness;
  const border = `${borderWidth} ${props.type} ${props.color}`;

  const styles: React.CSSProperties = {
    width: 0,
    height: 0,
  };

  if (props.direction === 'horizontal') {
    styles.width = props.length;
    styles.borderTop = border;
  } else {
    styles.height = props.length;
    styles.borderLeft = border;
  }

  const derievedStyles: React.CSSProperties = {
    opacity: props.show ? 1 : 0,
  };

  return (
    <div
      className="timeline-event__separator-connector"
      style={Object.assign({}, defaultStyles, derievedStyles, styles)}
      data-testid={`test-${props.testId || 'connector'}`}
    />
  );
};

export default TimelineConnector;

TimelineConnector.defaultProps = {
  show: true,
  length: 70,
  color: 'hsl(0, 0%, 70%)',
  type: 'solid',
  thickness: 2,
  direction: 'vertical',
};
