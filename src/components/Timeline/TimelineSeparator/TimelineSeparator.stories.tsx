import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimelineSeparator from "./TimelineSeparator";
import TimelineDot from '../TimelineDot';
import TimelineConnector from '../TimelineConnector';

import TimelineContext from "../common/context/TimelineContext";
import { Direction } from '../common/types';

export default {
  title: 'Timeline/Timeline Separator',
  component: TimelineSeparator,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimelineSeparator>;

const Template: ComponentStory<typeof TimelineSeparator> = (args: any) => (
  <TimelineContext.Provider value={{direction: args.direction as Direction}}>
    <TimelineSeparator {...args} />
  </TimelineContext.Provider>
);

export const Vertical = Template.bind({});
Vertical.args = {
  direction: 'vertical',
  children: (
    <React.Fragment>
      <TimelineDot />
      <TimelineConnector />
    </React.Fragment>
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
  children: (
    <React.Fragment>
      <TimelineDot />
      <TimelineConnector length={100} />
    </React.Fragment>
  ),
};

export const CustomGap = Template.bind({});
CustomGap.args = {
  direction: 'vertical',
  gap: 10,
  children: (
    <React.Fragment>
      <TimelineDot />
      <TimelineConnector />
    </React.Fragment>
  ),
};
