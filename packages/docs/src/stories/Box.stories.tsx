import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@oigabrielteodoro-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando elemento React</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
