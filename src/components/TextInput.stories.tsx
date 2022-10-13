import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from './TextInput'
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon key="icon">
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Text Your email address" key="Input" />,
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}
export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: (
      <TextInput.Input placeholder="Text Your email address" key="Input" />
    ),
  },
}
