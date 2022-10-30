import type { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@oigabrielteodoro-ignite-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Created new appointment',
    open: true,
  },
  argTypes: {
    open: {
      control: {
        type: 'boolean',
      },
    },
    onOpenChange: {
      action: 'clicked',
    },
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

export const WithDescription: StoryObj<ToastProps> = {
  args: {
    description: 'Example description',
  },
}
