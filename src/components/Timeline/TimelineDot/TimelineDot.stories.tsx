import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import { GoCheck } from "react-icons/go";
import TimelineDot from './TimelineDot';

export default {
  title: 'Timeline/Timeline Dot',
  component: TimelineDot,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimelineDot>;

const Template: ComponentStory<typeof TimelineDot> = (args) => <TimelineDot {...args} />;

export const Default = Template.bind({});
Default.args = {
  style: {
  },
};

export const Blue = Template.bind({});
Blue.args = {
  style: {
    backgroundColor: 'hsl(200, 90%, 50%)',
    border: 'none',
  },
};

export const GreenCheck = Template.bind({});
GreenCheck.args = {
  style: {
    backgroundColor: 'hsl(140, 60%, 35%)',
    border: 'none',
  },
  children: <GoCheck color={'hsl(0, 100%, 100%)'} size={20} />,
};

export const Square = Template.bind({});
Square.args = {
  style: {
    borderRadius: '0',
  },
};
