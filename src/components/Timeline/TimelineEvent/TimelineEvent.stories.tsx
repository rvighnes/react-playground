import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TimelineEvent, { TimelineEventProps } from './TimelineEvent';

import { IoFastFoodSharp } from "react-icons/io5";
import TimelineContent from '../TimelineContent';
import TimelineOppositeContent from '../TimelineOppositeContent';
import TimelineSeparator from '../TimelineSeparator';
import TimelineConnector from '../TimelineConnector';
import TimelineDot from '../TimelineDot';
import TimelineContext from '../common/context/TimelineContext';

export default {
  title: 'Timeline/Timeline Event',
  component: TimelineEvent,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TimelineEvent>;

const Template: ComponentStory<typeof TimelineEvent> = (args: any) => (
  <TimelineContext.Provider value={{ direction: args.direction || 'vertical' }}>
    <TimelineEvent {...args} />
  </TimelineContext.Provider>
);

export const Default = Template.bind<any>({});
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
      <h3 style={{ marginBlock: 0 }}>Eat</h3>
      <p style={{ marginBlock: 0, marginTop: '1em' }}>Because you need strength</p>
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
    index: 0,
    placement: 'after',
    separatorContentGap: 16,
    children: (
      <React.Fragment>
        <TimelineContent>{content}</TimelineContent>
        <TimelineOppositeContent>{oppositeContent}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              width: 36,
              height: 36,
              backgroundColor: 'hsl(0, 0%, 74%)',
              border: 'none',
            }}
          >
            <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />
          </TimelineDot>
          <TimelineConnector length={200} />
        </TimelineSeparator>
      </React.Fragment>
    ),
  };
})();

export const PlacedBefore = Template.bind<any>({});
PlacedBefore.args = ((): TimelineEventProps => {
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
      <h3 style={{ marginBlock: 0 }}>Eat</h3>
      <p style={{ marginBlock: 0, marginTop: '1em' }}>Because you need strength</p>
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
    index: 0,
    children: (
      <React.Fragment>
        <TimelineContent>{content}</TimelineContent>
        <TimelineOppositeContent>{oppositeContent}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              width: 36,
              height: 36,
              backgroundColor: 'hsl(0, 0%, 74%)',
              border: 'none',
            }}
          >
            <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />
          </TimelineDot>
          <TimelineConnector length={200} />
        </TimelineSeparator>
      </React.Fragment>
    ),
    placement: 'before',
  };
})();

export const Horizontal = Template.bind<any>({});
Horizontal.args = (() => {
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
    index: 0,
    placement: 'after',
    children: (
      <React.Fragment>
        <TimelineContent>{getContent('Wake up')}</TimelineContent>
        <TimelineOppositeContent>{getContent('9:30 am')}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              width: 15,
              height: 15,
              backgroundColor: 'hsl(0, 0%, 74%)',
              border: 'none',
            }}
          />
          <TimelineConnector length={500} />
        </TimelineSeparator>
      </React.Fragment>
    ),
    direction: 'horizontal',
  };
})();

export const OnlyOneSide = Template.bind<any>({});
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
      <h3 style={{ marginBlock: 0 }}>Eat</h3>
      <p style={{ marginBlock: 0, marginTop: '1em' }}>Because you need strength</p>
    </div>
  );

  return {
    id: 'default',
    index: 0,
    placement: 'after',
    children: (
      <React.Fragment>
        <TimelineContent>{content}</TimelineContent>
        <TimelineSeparator>
          <TimelineDot
            style={{
              width: 36,
              height: 36,
              backgroundColor: 'hsl(0, 0%, 74%)',
              border: 'none',
            }}
          >
            <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />
          </TimelineDot>
          <TimelineConnector length={200} />
        </TimelineSeparator>
      </React.Fragment>
    ),
  };
})();
