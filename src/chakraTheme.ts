import { extendTheme } from '@chakra-ui/react';

// Dark theme configuration
const colors = {
  brand: {
    deep: `#FF0098`,
    700: `#FF0098`,
    500: `#FB5680`,
    400: `#F87CC7`,
    300: `#FAB9D8`,
  },
  secondary: {
    700: `#20A1A2`,
    500: `#52DEEB`,
    300: `#78F3FE`,
  },
  transparent: `#00000000`,
  warning: `#FE8311`,
};

export const chakraTheme = extendTheme({
  colors,
  config: {
    initialColorMode: `dark`,
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
      },
    },
  },
});
