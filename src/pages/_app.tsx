import { AppProps } from 'next/app';
import { PrismicPreview } from '@prismicio/next';
import { Header } from '../components/Header';

import '../styles/globals.scss';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <PrismicPreview repositoryName="spacetravelingapp22">
      <Header />
      <Component {...pageProps} />
    </PrismicPreview>
  );
}

export default MyApp;
