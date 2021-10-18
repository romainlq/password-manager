import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ChakraProvider } from '@chakra-ui/react';
import store from '@/store';

import App from './App';

import theme from '@/assets/chakraTheme';

ReactDOM.render(
    <Provider store={store}>
        <StrictMode>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </StrictMode>
        ,
    </Provider>,
    document.getElementById('root')
);
