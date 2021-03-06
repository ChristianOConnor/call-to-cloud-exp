import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: { Component: any, pageProps: any }): JSX.Element {
  return <Component {...pageProps} />;
}

export default MyApp;