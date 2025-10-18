import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

export const chakraTheme = extendTheme({
  config,
  colors: {
    brand: {
      50: '#f7fafc',
      100: '#edf2f7',
      500: '#319795',
      600: '#2c7a7b',
      700: '#285e61',
      800: '#234e52',
      900: '#1a202c',
    },
  },
  styles: {
    global: (props: any) => ({
      body: {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'white',
        color: props.colorMode === 'dark' ? 'white' : 'gray.800',
      },
    }),
  },
  components: {
    Button: {
      variants: {
        primary: (props: any) => ({
          bg: props.colorMode === 'dark' ? 'brand.500' : 'brand.500',
          color: 'white',
          _hover: {
            bg: props.colorMode === 'dark' ? 'brand.600' : 'brand.600',
          },
        }),
      },
    },
    Modal: {
      baseStyle: (props: any) => ({
        dialog: {
          bg: props.colorMode === 'dark' ? 'gray.700' : 'white',
        },
      }),
    },
  },
})