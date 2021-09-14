import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ProgressBar from './ProgressBar';
import Progress from "./Progress";
import Buffer from "./Buffer";

export default {
  title: 'Progress Bar/Progress Bar',
  component: ProgressBar,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProgressBar>;

const DefaultTemplate: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args}>
    <Progress value={50} backgroundColor='red' />
  </ProgressBar>
);
export const Default = DefaultTemplate.bind({});

const VerticalTemplate: ComponentStory<typeof ProgressBar> = () => (
  <ProgressBar direction='vertical' style={{ height: 200 }}>
    <Progress value={40} backgroundColor='purple' />
  </ProgressBar>
);
export const Vertical = VerticalTemplate.bind({});

const WithBufferTemplate: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args}>
    <Progress value={50} backgroundColor='green' />
    <Buffer value={60} backgroundColor={'lightgreen'} />
  </ProgressBar>
);
export const WithBuffer = WithBufferTemplate.bind({});

const LoopingTemplate: ComponentStory<typeof ProgressBar> = (args) => {
  const [progress, setProgress] = React.useState<number>(10);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => oldProgress >= 100 ? 10 : oldProgress + 0.5);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <ProgressBar {...args}>
      <Progress value={progress} backgroundColor='blue' />
    </ProgressBar>
  );
};
export const Looping = LoopingTemplate.bind({});
