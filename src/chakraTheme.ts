import { extendTheme } from '@chakra-ui/react';

// Dark theme configuration
const colors = {
  brand: {
    deep: `#E92498`,
    700: `#F6A8D4`,
    500: `#FB5680`,
    400: `#F87CC7`,
    300: `#FAB9D8`,
  },
  hotpink: `#E92498`,
  lighterpink: `#F6A8D4`,
  secondary: {
    700: `#20A1A2`,
    500: `#52DEEB`,
    300: `#78F3FE`,
  },
  transparent: `#00000000`,
  warning: `#FE8311`,
};
const components = {
  Button: {
    variants: {
      noStyles: {
        background: `none`,
        padding: `0`,
        height: `auto`,
        position: `relative`,
        alignItems: `auto`,
        whiteSpace: `auto`,
        textAlign: `left`,
        fontWeight: `auto`,
        lineHeight: `auto`,
      },
    },
  },
  Text: {
    baseStyle: {
      color: 'black', // Your desired text color
      fontFamily: `Nunito`,
      fontSize: `1rem`,
      letterSpacing: '-0.02em',
    },
  },
  Box: {
    baseStyle: {
      background: `white`,
    },
  },
  Heading: {
    baseStyle: {
      fontFamily: `Nunito`,
      color: 'black',
      fontWeight: `light`,
      letterSpacing: `-0.03em`,
    },
  },
};

export const chakraTheme = extendTheme({
  colors,
  config: {
    initialColorMode: `dark`,
    useSystemColorMode: false,
  },
  components,
  styles: {
    global: {
      body: {
        bg: 'white',
      },
      p: {
        color: 'black',
      },
    },
  },
});
