import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimelineConnector from './TimelineConnector';

export default {
  title: 'Timeline/Timeline Connector',
  component: TimelineConnector,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimelineConnector>;

const Template: ComponentStory<typeof TimelineConnector> = (args) => <TimelineConnector {...args} />;

export const Default = Template.bind({});
Default.args = {
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
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
