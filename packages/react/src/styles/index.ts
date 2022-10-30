import {
  colors,
  fontSizes,
  fontWeights,
  radii,
  fonts,
  lineHeights,
  space,
} from '@oigabrielteodoro-ignite-ui/tokens'

import { defaultThemeMap, createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    colors,
    fontSizes,
    fontWeights,
    radii,
    fonts,
    lineHeights,
    space,
  },
})
