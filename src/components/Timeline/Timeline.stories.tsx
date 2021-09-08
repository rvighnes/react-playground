import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GoCheck } from "react-icons/go";

import Timeline from './Timeline';

import TimelineEvent from "./TimelineEvent";
import TimelineContent from "./TimelineContent";
import TimelineOppositeContent from "./TimelineOppositeContent";
import TimelineSeparator from "./TimelineSeparator";
import TimelineDot from "./TimelineDot";
import TimelineConnector from "./TimelineConnector";

import { IoFastFoodSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import styled from 'styled-components';

export default {
  title: 'Timeline/Timeline',
  component: Timeline,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => (
  <Timeline {...args} />
);

const getColoredText = (text: string, color: string, fontWeight: React.CSSProperties['fontWeight'] = 'bold'): JSX.Element => {
  return (
    <p
      style={{
        marginBlock: 0,
        marginTop: 2,
        fontWeight,
        color,
      }}
    >
      {text}
    </p>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='new-version-updates' index={0}>
        <TimelineContent>
          {getColoredText('New version updates', 'hsl(200, 90%, 40%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(200, 90%, 45%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 80%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='target-your-app' index={1}>
        <TimelineContent>
          {getColoredText('Target your app', 'hsl(193, 45.3%, 37.3%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(140, 60%, 35%)', border: 'none' }}>
            <GoCheck color="hsl(0, 100%, 100%)" size={20} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 80%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='appstore-details' index={2}>
        <TimelineContent>
          {getColoredText('Appstore Details', 'hsl(193, 45.3%, 37.3%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(140, 60%, 35%)', border: 'none' }}>
            <GoCheck color="hsl(0, 100%, 100%)" size={20} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 80%)" length={50} type="dashed" />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='review-and-submit' index={3}>
        <TimelineContent>
          {getColoredText('Review and submit', 'hsl(192, 27.1%, 74.7%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(198, 10.7%, 76.3%)', border: 'none' }} />
        </TimelineSeparator>
      </TimelineEvent>

    </React.Fragment>
  ),
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='new-version-updates' index={0}>
        <TimelineContent>
          {getColoredText('New version updates', 'hsl(200, 90%, 40%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(200, 90%, 45%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 80%)" length={200} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='target-your-app' index={1}>
        <TimelineContent>
          {getColoredText('Target your app', 'hsl(193, 45.3%, 37.3%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(140, 60%, 35%)', border: 'none' }}>
            <GoCheck color="hsl(0, 100%, 100%)" size={20} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 80%)" length={200} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='appstore-details' index={2}>
        <TimelineContent>
          {getColoredText('Appstore Details', 'hsl(193, 45.3%, 37.3%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(140, 60%, 35%)', border: 'none' }}>
            <GoCheck color="hsl(0, 100%, 100%)" size={20} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 80%)" length={200} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='review-and-submit' index={3}>
        <TimelineContent>
          {getColoredText('Review and submit', 'hsl(192, 27.1%, 74.7%)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ backgroundColor: 'hsl(198, 10.7%, 76.3%)', border: 'none' }} />
        </TimelineSeparator>
      </TimelineEvent>

    </React.Fragment>
  ),
};

const getBasicColoredText = (text: string, color: string, css: React.CSSProperties = {}): JSX.Element => {
  return (
    <p
      style={{
        marginBlock: 0,
        marginTop: -2,
        width: 'fit-content',
        fontWeight: "normal",
        color,
        ...css
      }}
    >
      {text}
    </p>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='eat' index={0}>
        <TimelineContent>
          {getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='code' index={1}>
        <TimelineContent>
          {getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='sleep' index={2}>
        <TimelineContent>
          {getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
        </TimelineSeparator>
      </TimelineEvent>

    </React.Fragment>
  ),
};

export const PlacedBefore = Template.bind({});
PlacedBefore.args = {
  placement: 'before',
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='eat' index={0}>
        <TimelineContent>
          {getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='code' index={1}>
        <TimelineContent>
          {getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='sleep' index={2}>
        <TimelineContent>
          {getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='repeat' index={3}>
        <TimelineContent>
          {getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
        </TimelineSeparator>
      </TimelineEvent>

    </React.Fragment>
  ),
};

export const AlternatingTimeline = Template.bind({});
AlternatingTimeline.args = {
  placement: 'alternate',
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='eat' index={0}>
        <TimelineContent>
          {getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='code' index={1}>
        <TimelineContent>
          {getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='sleep' index={2}>
        <TimelineContent>
          {getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='repeat' index={3}>
        <TimelineContent>
          {getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
        </TimelineSeparator>
      </TimelineEvent>

    </React.Fragment>
  ),
};

export const OppositeContent = Template.bind({});
OppositeContent.args = {
  placement: 'alternate',
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='eat' index={0}>
        <TimelineContent>
          {getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <TimelineOppositeContent>
          {getBasicColoredText('09:30 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto' })}
        </TimelineOppositeContent>
      </TimelineEvent>

      <TimelineEvent id='code' index={1}>
        <TimelineContent>
          {getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <TimelineOppositeContent>
          {getBasicColoredText('10:00 am', 'hsl(0, 0%, 0%, 0.54)', {})}
        </TimelineOppositeContent>
      </TimelineEvent>

      <TimelineEvent id='sleep' index={2}>
        <TimelineContent>
          {getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <TimelineOppositeContent>
          {getBasicColoredText('12:00 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto' })}
        </TimelineOppositeContent>
      </TimelineEvent>

      <TimelineEvent id='repeat' index={3}>
        <TimelineContent>
          {getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)', { marginLeft: 'auto' })}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <TimelineOppositeContent>
          {getBasicColoredText('09:00 am', 'hsl(0, 0%, 0%, 0.54)', {})}
        </TimelineOppositeContent>
      </TimelineEvent>

    </React.Fragment>
  ),
};

export const SampleCustomization = Template.bind({});
SampleCustomization.args = {
  placement: 'alternate',
  eventGap: 5,
  children: (
    <React.Fragment>

      <TimelineEvent id='eat' index={0}>
        <TimelineContent>
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
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 36, height: 36, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }}>
            <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <TimelineOppositeContent>
          {getBasicColoredText('09:30 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto', fontSize: 14 })}
        </TimelineOppositeContent>
      </TimelineEvent>

      <TimelineEvent id='code' index={1}>
        <TimelineContent>
          <div
            style={{
              width: 300,
              padding: 10,
              marginLeft: 'auto',
              textAlign: 'right',
              boxShadow: `
              0px 3px 3px -2px rgb(0 0 0 / 20%),
              0px 3px 4px 0px rgb(0 0 0 / 14%),
              0px 1px 8px 0px rgb(0 0 0 / 12%)
            `,
            }}
          >
            <h3 style={{ marginBlock: 0 }}>Code</h3>
            <p style={{ marginBlock: 0, marginTop: '1em' }}>Because it's awesome!</p>
          </div>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 36, height: 36, backgroundColor: 'hsl(210, 79%, 46%)', border: 'none' }}>
            <MdComputer color="hsl(0, 0%, 98%)" size={24} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <TimelineOppositeContent>
          {getBasicColoredText('10:00 am', 'hsl(0, 0%, 0%, 0.54)', { fontSize: 14 })}
        </TimelineOppositeContent>
      </TimelineEvent>

      <TimelineEvent id='sleep' index={2}>
        <TimelineContent>
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
            <h3 style={{ marginBlock: 0 }}>Sleep</h3>
            <p style={{ marginBlock: 0, marginTop: '1em' }}>Because you need rest</p>
          </div>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 36, height: 36, backgroundColor: 'hsl(0, 0%, 100%)', border: '2px solid hsl(210, 79%, 46%)' }}>
            <FaBed color="hsl(0, 0%, 0%)" size={24} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

      <TimelineEvent id='repeat' index={3}>
        <TimelineContent>
          <div
            style={{
              width: 300,
              padding: 10,
              marginLeft: 'auto',
              textAlign: 'right',
              boxShadow: `
              0px 3px 3px -2px rgb(0 0 0 / 20%),
              0px 3px 4px 0px rgb(0 0 0 / 14%),
              0px 1px 8px 0px rgb(0 0 0 / 12%)
            `,
            }}
          >
            <h3 style={{ marginBlock: 0 }}>Repeat</h3>
            <p style={{ marginBlock: 0, marginTop: '1em' }}>Because this is the life you love!</p>
          </div>
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 36, height: 36, backgroundColor: 'hsl(339, 100%, 43%)', border: 'none' }}>
            <HiOutlineRefresh color="hsl(0, 0%, 98%)" size={24} />
          </TimelineDot>
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
      </TimelineEvent>

    </React.Fragment>
  ),
};

const StyledTimelineEvent = styled(TimelineEvent)`
  .timeline-event__opposite-content {
    max-width: fit-content;
  }
`;

const StyledTimelineOppositeContent = styled(TimelineOppositeContent)`
  /* max-width: fit-content; */
`;

export const CustomizeOppositeContentSize = Template.bind({});
CustomizeOppositeContentSize.args = {
  placement: 'after',
  eventGap: 5,
  children: (
    <React.Fragment>

      <StyledTimelineEvent id='eat' index={0}>
        <TimelineContent>
          {getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <StyledTimelineOppositeContent>
          {getBasicColoredText('09:30 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto' })}
        </StyledTimelineOppositeContent>
      </StyledTimelineEvent>

      <StyledTimelineEvent id='code' index={1}>
        <TimelineContent>
          {getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <StyledTimelineOppositeContent>
          {getBasicColoredText('10:00 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto' })}
        </StyledTimelineOppositeContent>
      </StyledTimelineEvent>

      <StyledTimelineEvent id='sleep' index={2}>
        <TimelineContent>
          {getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <StyledTimelineOppositeContent>
          {getBasicColoredText('12:00 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto' })}
        </StyledTimelineOppositeContent>
      </StyledTimelineEvent>

      <StyledTimelineEvent id='repeat' index={3}>
        <TimelineContent>
          {getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)')}
        </TimelineContent>
        <TimelineSeparator>
          <TimelineDot style={{ width: 12, height: 12, backgroundColor: 'hsl(0, 0%, 74%)', border: 'none' }} />
          <TimelineConnector color="hsl(0, 0%, 74%)" length={50} />
        </TimelineSeparator>
        <StyledTimelineOppositeContent>
          {getBasicColoredText('09:00 am', 'hsl(0, 0%, 0%, 0.54)', { marginLeft: 'auto' })}
        </StyledTimelineOppositeContent>
      </StyledTimelineEvent>

    </React.Fragment>
  ),
};
