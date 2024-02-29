import Layout from '@/components/layout';
import { siteMetaConfig } from '@/config/site.config';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import PostHog, { PostHogConfig } from 'posthog-js';

const options: Partial<PostHogConfig> = {
  api_host: process.env.PUBLIC_POSTHOG_HOST || '',
};

PostHog.init(process.env.PUBLIC_POSTHOG_KEY || '', options);

export default function App({ Component, pageProps }: AppProps) {
  return (
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
  );
}
