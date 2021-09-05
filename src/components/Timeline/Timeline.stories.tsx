import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GoCheck } from "react-icons/go";

import Timeline from './Timeline';

import { IoFastFoodSharp } from "react-icons/io5";
import { MdComputer } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";

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
        width: 'fit-content',
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
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    connector: {
      color: 'hsl(0, 0%, 80%)',
      length: 50,
    },
  },
  clickHandler: (id) => console.log(id),
  events: [
    {
      id: 'new-version-updates',
      content: getColoredText('New version updates', 'hsl(200, 90%, 40%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(200, 90%, 45%)',
            border: 'none',
          },
        },
      },
    },
    {
      id: 'target-your-app',
      content: getColoredText('Target your app', 'hsl(193, 45.3%, 37.3%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(140, 60%, 35%)',
            border: 'none',
          },
          children: <GoCheck color="hsl(0, 100%, 100%)" size={20} />
        },
      },
    },
    {
      id: 'appstore-details',
      content: getColoredText('Appstore Details', 'hsl(193, 45.3%, 37.3%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(140, 60%, 35%)',
            border: 'none',
          },
          children: <GoCheck color="hsl(0, 100%, 100%)" size={20} />
        },
        connector: {
          type: 'dashed',
        },
      },
    },
    {
      id: 'review-and-submit',
      content: getColoredText('Review and submit', 'hsl(192, 27.1%, 74.7%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(198, 10.7%, 76.3%)',
            border: 'none',
          },
        },
        connector: {
          show: false,
        },
      },
    },
  ],
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: 'horizontal',
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    connector: {
      color: 'hsl(0, 0%, 80%)',
      length: 200,
    },
  },
  events: [
    {
      id: 'new-version-updates',
      content: getColoredText('New version updates', 'hsl(200, 90%, 40%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(200, 90%, 45%)',
            border: 'none',
          },
        },
      },
    },
    {
      id: 'target-your-app',
      content: getColoredText('Target your app', 'hsl(193, 45.3%, 37.3%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(140, 60%, 35%)',
            border: 'none',
          },
          children: <GoCheck color="hsl(0, 100%, 100%)" size={20} />
        },
      },
    },
    {
      id: 'appstore-details',
      content: getColoredText('Appstore Details', 'hsl(193, 45.3%, 37.3%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(140, 60%, 35%)',
            border: 'none',
          },
          children: <GoCheck color="hsl(0, 100%, 100%)" size={20} />
        },
      },
    },
    {
      id: 'review-and-submit',
      content: getColoredText('Review and submit', 'hsl(192, 27.1%, 74.7%)'),
      separator: {
        dot: {
          style: {
            backgroundColor: 'hsl(198, 10.7%, 76.3%)',
            border: 'none',
          },
        },
        connector: {
          show: false,
        },
      },
    },
  ],
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
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    dot: {
      style: {
        width: 12,
        height: 12,
        backgroundColor: 'hsl(0, 0%, 74%)',
        border: 'none',
      },
    },
    connector: {
      color: 'hsl(0, 0%, 74%)',
      length: 50,
    },
  },
  events: [
    {
      id: 'eat',
      content: getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)'),
    },
    {
      id: 'code',
      content: getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)'),
    },
    {
      id: 'sleep',
      content: getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)'),
      separator: {
        connector: {
          show: false,
        },
      },
    },
  ],
};

export const AlignBefore = Template.bind({});
AlignBefore.args = {
  align: 'before',
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    dot: {
      style: {
        width: 12,
        height: 12,
        backgroundColor: 'hsl(0, 0%, 74%)',
        border: 'none',
      },
    },
    connector: {
      color: 'hsl(0, 0%, 74%)',
      length: 50,
    },
  },
  events: [
    {
      id: 'eat',
      content: getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
    },
    {
      id: 'code',
      content: getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
    },
    {
      id: 'sleep',
      content: getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
    },
    {
      id: 'repeat',
      content: getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
      separator: {
        connector: {
          show: false,
        },
      },
    },
  ],
};

export const AlternatingTimeline = Template.bind({});
AlternatingTimeline.args = {
  align: 'alternate',
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    dot: {
      style: {
        width: 12,
        height: 12,
        backgroundColor: 'hsl(0, 0%, 74%)',
        border: 'none',
      },
    },
    connector: {
      color: 'hsl(0, 0%, 74%)',
      length: 50,
    },
  },
  events: [
    {
      id: 'eat',
      content: getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)', {}),
    },
    {
      id: 'code',
      content: getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
    },
    {
      id: 'sleep',
      content: getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)', {}),
    },
    {
      id: 'repeat',
      content: getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
      separator: {
        connector: {
          show: false,
        },
      },
    },
  ],
};

export const OppositeContent = Template.bind({});
OppositeContent.args = {
  align: 'alternate',
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    dot: {
      style: {
        width: 12,
        height: 12,
        backgroundColor: 'hsl(0, 0%, 74%)',
        border: 'none',
      },
    },
    connector: {
      color: 'hsl(0, 0%, 74%)',
      length: 50,
    },
  },
  events: [
    {
      id: 'eat',
      content: getBasicColoredText('Eat', 'hsl(0, 0%, 0%, 0.87)', {}),
      oppositeContent: getBasicColoredText('09:30 am', 'hsl(0, 0%, 0%, 0.54)', {marginLeft: 'auto'}),
    },
    {
      id: 'code',
      content: getBasicColoredText('Code', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
      oppositeContent: getBasicColoredText('10:00 am', 'hsl(0, 0%, 0%, 0.54)', {}),
    },
    {
      id: 'sleep',
      content: getBasicColoredText('Sleep', 'hsl(0, 0%, 0%, 0.87)', {}),
      oppositeContent: getBasicColoredText('12:00 am', 'hsl(0, 0%, 0%, 0.54)', {marginLeft: 'auto'}),
    },
    {
      id: 'repeat',
      content: getBasicColoredText('Repeat', 'hsl(0, 0%, 0%, 0.87)', {marginLeft: 'auto'}),
      oppositeContent: getBasicColoredText('09:00 am', 'hsl(0, 0%, 0%, 0.54)', {}),
      separator: {
        connector: {
          show: false,
        },
      },
    },
  ],
};

export const Customized = Template.bind({});
Customized.args = {
  align: 'alternate',
  separator: {
    gaps: {
      betweenEvents: 5,
    },
    dot: {
      style: {
        width: 36,
        height: 36,
        backgroundColor: 'hsl(0, 0%, 74%)',
        border: 'none',
      },
    },
    connector: {
      color: 'hsl(0, 0%, 74%)',
      length: 50,
    },
  },
  events: [
    {
      id: 'eat',
      content: (
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
      ),
      oppositeContent: getBasicColoredText('09:30 am', 'hsl(0, 0%, 0%, 0.54)', {marginLeft: 'auto', fontSize: 14}),
      separator: {
        dot: {
          children: <IoFastFoodSharp color="hsl(0, 0%, 98%)" size={24} />,
        },
      },
    },
    {
      id: 'code',
      content: (
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
          <h3 style={{marginBlock: 0}}>Code</h3>
          <p style={{marginBlock: 0, marginTop: '1em'}}>Because it's awesome!</p>
        </div>
      ),
      oppositeContent: getBasicColoredText('10:00 am', 'hsl(0, 0%, 0%, 0.54)', {fontSize: 14}),
      separator: {
        dot: {
          children: <MdComputer color="hsl(0, 0%, 98%)" size={24} />,
          style: {
            backgroundColor: 'hsl(210, 79%, 46%)',
          },
        },
      },
    },
    {
      id: 'sleep',
      content: (
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
          <h3 style={{marginBlock: 0}}>Sleep</h3>
          <p style={{marginBlock: 0, marginTop: '1em'}}>Because you need rest</p>
        </div>
      ),
      separator: {
        dot: {
          children: <FaBed color="hsl(0, 0%, 0%)" size={24} />,
          style: {
            backgroundColor: 'hsl(0, 0%, 100%)',
            border: '2px solid hsl(210, 79%, 46%)',
          },
        },
      },
    },
    {
      id: 'repeat',
      content: (
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
          <h3 style={{marginBlock: 0}}>Repeat</h3>
          <p style={{marginBlock: 0, marginTop: '1em'}}>Because this is the life you love!</p>
        </div>
      ),
      separator: {
        dot: {
          children: <HiOutlineRefresh color="hsl(0, 0%, 98%)" size={24} />,
          style: {
            backgroundColor: 'hsl(339, 100%, 43%)',
          },
        },
        connector: {
          show: false,
        },
      },
    },
  ],
};
