import ReactDOM from 'react-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { chakraTheme } from './chakraTheme';
import App from './App';

ReactDOM.render(
  <ChakraProvider theme={chakraTheme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root'),
);
