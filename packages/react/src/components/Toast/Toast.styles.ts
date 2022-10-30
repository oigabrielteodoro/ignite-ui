import * as Toast from '@radix-ui/react-toast'

import { styled, keyframes } from '../../styles'

const VIEWPORT_PADDING = 25

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideOut = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

export const ToastContainer = styled(Toast.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  padding: '$3 $5',
  backgroundColor: '$gray800',
  border: '2px solid $gray600',
  borderRadius: '$sm',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideOut} 100ms ease-in`,
  },
})

export const ToastTitle = styled(Toast.Title, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  color: '$gray200',
  cursor: 'pointer',
  transition: 'color 0.3s',

  '&:hover': {
    color: '$gray100',
  },
})

export const ToastViewport = styled(Toast.Viewport, {
  padding: VIEWPORT_PADDING,
})
