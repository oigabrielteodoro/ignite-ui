import type { Meta, StoryObj } from '@storybook/react'
import {
  Button,
  Text,
  Tooltip,
  TooltipProps,
} from '@oigabrielteodoro-ignite-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip.Content,
  args: {
    children: <Text>Tooltip message</Text>,
  },
  decorators: [
    (Story) => (
      <Tooltip.Provider>
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Button>Hover me</Button>
          </Tooltip.Trigger>
          {Story()}
        </Tooltip.Root>
      </Tooltip.Provider>
    ),
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
