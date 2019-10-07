import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { ThemeProvider } from 'styled-components';

import createStore from '../src/store';

import theme, { media, viewPorts } from '../configs/theme';

export default withRedux(createStore, { debug: true })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      return {
        pageProps: {
          ...(Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}),
        },
      };
    }

    render() {
      const { Component, pageProps, store } = this.props;

      return (
        <ThemeProvider theme={{ ...theme, media, viewPorts }}>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      );
    }
  }
);
