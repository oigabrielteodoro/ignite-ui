import { ComponentProps } from 'react'
import { X } from 'phosphor-react'
import { Provider, Description } from '@radix-ui/react-toast'

import { Text } from '../Text'

import {
  ToastContainer,
  ToastClose,
  ToastTitle,
  ToastViewport,
} from './Toast.styles'

export type ToastProps = {
  title: string
  description?: string
} & ComponentProps<typeof ToastContainer>

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <Provider>
      <ToastContainer {...props}>
        <ToastTitle>
          <Text as="strong" size="xl">
            {title}
          </Text>

          <ToastClose>
            <X />
          </ToastClose>
        </ToastTitle>

        {!!description && (
          <Description asChild>
            <Text as="small" size="sm" variant="secondary">
              {description}
            </Text>
          </Description>
        )}
      </ToastContainer>

      <ToastViewport />
    </Provider>
  )
}
