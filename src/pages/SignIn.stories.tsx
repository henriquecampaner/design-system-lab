import { Meta, StoryObj } from '@storybook/react'
import { SignIn } from './SignIn'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'
export default {
  title: 'Pages/Sign In',
  component: SignIn,
  args: {},
  argTypes: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/sessions', (req, res, ctx) => {
          return res(
            ctx.json({
              message: 'success',
            }),
          )
        }),
      ],
    },
  },
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    await userEvent.type(
      canvas.getByPlaceholderText('Type your email'),
      'henrique@campaner.com',
    )

    await userEvent.type(canvas.getByPlaceholderText('*****'), '12345678')

    await userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      return expect(canvas.getByText('User Logged in')).toBeInTheDocument()
    })
  },
}
