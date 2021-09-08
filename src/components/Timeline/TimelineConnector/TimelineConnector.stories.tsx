import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimelineConnector from './TimelineConnector';
import TimelineContext from "../common/context/TimelineContext";

export default {
  title: 'Timeline/Timeline Connector',
  component: TimelineConnector,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimelineConnector>;

const Template: ComponentStory<typeof TimelineConnector> = (args) => (
  <TimelineContext.Provider value={{direction: 'vertical'}}>
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <TimelineConnector {...args} />
    </div>
  </TimelineContext.Provider>
);

export const Default = Template.bind({});
Default.args = {
};

export const Dotted = Template.bind({});
Dotted.args = {
  type: 'dotted',
};

export const Red = Template.bind({});
Red.args = {
  color: 'red',
};

export const Thick = Template.bind({});
Thick.args = {
  thickness: 8,
};

export const Long = Template.bind({});
Long.args = {
  length: 110,
};
