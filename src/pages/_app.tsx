import { store } from '@/store';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};