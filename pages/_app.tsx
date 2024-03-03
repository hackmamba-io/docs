import Layout from '@/components/layout';
import { siteMetaConfig } from '@/config/site.config';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
    loaded: (posthog) => {
      if (process.env.NODE_ENV === 'development') posthog.debug();
    },
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PostHogProvider client={posthog}>
      <Layout>
        <Head>
          <title>{siteMetaConfig.name}</title>
          <meta name={siteMetaConfig.name} content={siteMetaConfig.name} />
          <meta
            name='keywords'
            content={siteMetaConfig.keywords.join(',')}
          ></meta>
          <meta name='description' content={siteMetaConfig.description}></meta>

          <link rel='icon' href='/assets/siteLogo.svg' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </PostHogProvider>
  );
}
