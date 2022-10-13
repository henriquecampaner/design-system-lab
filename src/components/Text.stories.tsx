import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from './Text'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Hello World',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Small: StoryObj<TextProps> = {}
export const Medium: StoryObj<TextProps> = {
  args: {
    size: 'md',
  },
}
export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Text with P</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
}
