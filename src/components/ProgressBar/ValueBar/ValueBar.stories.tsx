import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import ValueBar from './ValueBar';
import ProgressBarContext from "../common/context/ProgressBarContext";

export default {
  title: 'Progress Bar/Value Bar',
  component: ValueBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ValueBar>;

const StyledContainer = styled.div`
  width: 100%;
  display: inline-block;

  position: relative;
  overflow: hidden;
`;

const DefaultTemplate: ComponentStory<typeof ValueBar> = (args) => (
  <ProgressBarContext.Provider value={{ thickness: 10, direction: 'horizontal' }}>
    <StyledContainer style={{ height: 10, backgroundColor: 'hsl(0, 0%, 85%)' }}>
      <ValueBar {...args} />
    </StyledContainer>
  </ProgressBarContext.Provider>
);
export const Default = DefaultTemplate.bind({});
Default.args = {
  value: 45,
};

const BlueTemplate: ComponentStory<typeof ValueBar> = (args) => (
  <ProgressBarContext.Provider value={{ thickness: 10, direction: 'horizontal' }}>
    <StyledContainer style={{ height: 10, backgroundColor: 'hsl(0, 0%, 85%)' }}>
      <ValueBar {...args} />
    </StyledContainer>
  </ProgressBarContext.Provider>
);
export const Blue = BlueTemplate.bind({});
Blue.args = {
  backgroundColor: 'blue',
  value: 45,
};

const ReversedTemplate: ComponentStory<typeof ValueBar> = (args) => (
  <ProgressBarContext.Provider value={{ thickness: 10, direction: 'horizontal', isReversed: true }}>
    <StyledContainer style={{ height: 10, backgroundColor: 'hsl(0, 0%, 85%)' }}>
      <ValueBar {...args} />
    </StyledContainer>
  </ProgressBarContext.Provider>
);
export const Reversed = ReversedTemplate.bind({});
Reversed.args = {
  value: 45,
  backgroundColor: 'green',
};

const WidthTemplate: ComponentStory<typeof ValueBar> = (args) => (
  <ProgressBarContext.Provider value={{ thickness: 10, direction: 'horizontal' }}>
    <StyledContainer style={{ height: 10, backgroundColor: 'hsl(0, 0%, 85%)' }}>
      <ValueBar {...args} />
    </StyledContainer>
  </ProgressBarContext.Provider>
);
export const Width = WidthTemplate.bind({});
Width.args = {
  backgroundColor: 'purple',
  value: 90,
};

const VerticalTemplate: ComponentStory<typeof ValueBar> = (args) => (
  <ProgressBarContext.Provider value={{ thickness: 10, direction: 'vertical' }}>
    <StyledContainer style={{ width: 10, height: 200, backgroundColor: 'hsl(0, 0%, 85%)' }}>
      <ValueBar {...args} />
    </StyledContainer>
  </ProgressBarContext.Provider>
);
export const Vertical = VerticalTemplate.bind({});
Vertical.args = {
  backgroundColor: 'red',
  value: 35,
};

const VerticalReversedTemplate: ComponentStory<typeof ValueBar> = (args) => (
  <ProgressBarContext.Provider value={{ thickness: 10, direction: 'vertical', isReversed: true }}>
    <StyledContainer style={{ width: 10, height: 200, backgroundColor: 'hsl(0, 0%, 85%)' }}>
      <ValueBar {...args} />
    </StyledContainer>
  </ProgressBarContext.Provider>
);
export const VerticalReversed = VerticalReversedTemplate.bind({});
VerticalReversed.args = {
  backgroundColor: 'orange',
  value: 56,
};
