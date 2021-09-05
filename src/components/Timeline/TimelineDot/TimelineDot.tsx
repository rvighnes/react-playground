import React from "react";

const defaultStyles: React.CSSProperties = {
  width: 25,
  height: 25,
  position: 'relative',

  backgroundColor: 'hsl(0, 0%, 92%)',

  border: '1px solid hsl(0, 0%, 10%)',
  borderRadius: '50%',

  overflow: 'hidden',

  display: 'grid',
  placeItems: 'center',
  cursor: 'auto',
};

export interface TimelineDotProps {
  /**
   * Optional testId for the dot element
   */
  testId?: string;

  /**
   * CSS style overrides
   */
  style?: React.CSSProperties;

   /**
    * Content to be shown inside dot
    */
  children?: any;
}

/**
 * This component is for representing the DOT in the Timeline component.
 *
 * @param props {TimelineDotProps}
 * @returns {JSX.Element}
 */
const TimelineDot: React.FC<TimelineDotProps> = (props) => {
  return (
    <div
      className="timeline-event__separator-dot"
      style={Object.assign({}, defaultStyles, props.style)}
      data-testid={`test-${props.testId || 'timeline-dot'}`}
    >
      {props.children}
    </div>
  );
};

export default TimelineDot;

TimelineDot.defaultProps = {
  style: {},
};
