import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimelineEvent, { TimelineEventProps } from './TimelineEvent';

import { IoFastFoodSharp } from "react-icons/io5";

export default {
  title: 'Timeline/Timeline Event',
  component: TimelineEvent,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimelineEvent>;

const Template: ComponentStory<typeof TimelineEvent> = (args) => <TimelineEvent {...args} />;

export const Default = Template.bind({});
Default.args = ((): TimelineEventProps => {
  const content = (
    <div
      style={{
        width: 300,
        padding: 10,
        boxShadow: `
          0px 3px 3px -2px rgb(0 0 0 / 20%),
          0px 3px 4px 0px rgb(0 0 0 / 14%),
          0px 1px 8px 0px rgb(0 0 0 / 12%)
        `,
      }}
    >
      <h3 style={{marginBlock: 0}}>Eat</h3>
      <p style={{marginBlock: 0, marginTop: '1em'}}>Because you need strength</p>
    </div>
  );

  const oppositeContent = (
    <p
      style={{
        color: 'rgba(0, 0, 0, 0.54)',
        textAlign: 'right',
        marginBlock: 0,
      }}
    >
      9:30 am
    </p>
  );

  return {
    id: 'default',
    content,
    oppositeContent,
    separator: {
      dot: {
        children: <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />,
        style: {
          width: 36,
          height: 36,
          backgroundColor: 'hsl(0, 0%, 74%)',
          border: 'none',
        },
      },
      connector: {
        length: 200,
      },
    },
  };
})();

export const AlignStart = Template.bind({});
AlignStart.args = ((): TimelineEventProps => {
  const content = (
    <div
      style={{
        width: 300,
        padding: 10,
        marginLeft: 'auto',
        boxShadow: `
          0px 3px 3px -2px rgb(0 0 0 / 20%),
          0px 3px 4px 0px rgb(0 0 0 / 14%),
          0px 1px 8px 0px rgb(0 0 0 / 12%)
        `,
      }}
    >
      <h3 style={{marginBlock: 0}}>Eat</h3>
      <p style={{marginBlock: 0, marginTop: '1em'}}>Because you need strength</p>
    </div>
  );

  const oppositeContent = (
    <p
      style={{
        color: 'rgba(0, 0, 0, 0.54)',
        marginBlock: 0,
      }}
    >
      9:30 am
    </p>
  );

  return {
    id: 'default',
    content,
    oppositeContent,
    alignSelf: 'before',
    separator: {
      dot: {
        children: <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />,
        style: {
          width: 36,
          height: 36,
          backgroundColor: 'hsl(0, 0%, 74%)',
          border: 'none',
        },
      },
      connector: {
        length: 200,
      },
    },
  };
})();

export const Horizontal = Template.bind({});
Horizontal.args = ((): TimelineEventProps => {
  const getContent = (text: string): JSX.Element => (
    <p
      style={{
        color: 'rgba(0, 0, 0, 0.54)',
        marginBlock: 0,
      }}
    >
      {text}
    </p>
  );

  return {
    id: 'default',
    content: getContent('Wake up'),
    oppositeContent: getContent('9:30 am'),
    direction: 'horizontal',
    separator: {
      dot: {
        style: {
          width: 15,
          height: 15,
          backgroundColor: 'hsl(0, 0%, 74%)',
          border: 'none',
        },
      },
      connector: {
        length: 200,
      },
    },
  };
})();

export const OnlyOneSide = Template.bind({});
OnlyOneSide.args = ((): TimelineEventProps => {
  const content = (
    <div
      style={{
        width: 300,
        padding: 10,
        boxShadow: `
          0px 3px 3px -2px rgb(0 0 0 / 20%),
          0px 3px 4px 0px rgb(0 0 0 / 14%),
          0px 1px 8px 0px rgb(0 0 0 / 12%)
        `,
      }}
    >
      <h3 style={{marginBlock: 0}}>Eat</h3>
      <p style={{marginBlock: 0, marginTop: '1em'}}>Because you need strength</p>
    </div>
  );

  return {
    id: 'default',
    content,
    oppositeContentFlexValue: '0',
    separator: {
      dot: {
        children: <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />,
        style: {
          width: 36,
          height: 36,
          backgroundColor: 'hsl(0, 0%, 74%)',
          border: 'none',
        },
      },
      connector: {
        length: 200,
      },
    },
  };
})();
