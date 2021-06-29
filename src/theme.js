import {tailwind} from '@theme-ui/presets'

console.log({tailwind})

const theme = {
  ...tailwind,
  styles: {
    ...tailwind.styles,
  },
}

export default theme
