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
  lpink: `#F6A8D4`,
  lorange: `#FDC7AB`,
  dorange: `#FC8119`,
  peach: `#FEF6F7`,

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
      white: {
        background: `white`,
        color: `black`,
        borderRadius: `100px`,
      },
      hotpink: {
        background: `#E92498`,
        color: `white`,
        borderRadius: `100px`,
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
      fontWeight: `700`,
      color: 'black',
      letterSpacing: `-0.01em`,
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
        fontFamily: 'nunito',
        bg: '#F8F1F1',
        color: 'black',
      },
    },
  },
});
