import { ComponentProps } from 'react'
import { Portal, Provider, Root, Trigger } from '@radix-ui/react-tooltip'

import { TooltipContainer, TooltipArrow } from './Tooltip.styles'

export type TooltipProps = ComponentProps<typeof TooltipContainer>

function Content({ children }: TooltipProps) {
  return (
    <Portal>
      <TooltipContainer>
        {children}
        <TooltipArrow />
      </TooltipContainer>
    </Portal>
  )
}

Content.displayName = 'TooltipContent'

export const Tooltip = { Provider, Root, Trigger, Content }
