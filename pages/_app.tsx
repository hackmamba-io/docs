import Layout from '@/components/layout';
import { siteMetaConfig } from '@/config/site.config';
import '@/styles/globals.css';
import { MarkdocNextJsPageProps } from '@markdoc/next.js';
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

type MyAppProps = MarkdocNextJsPageProps;

interface Heading {
  level: number;
  id?: string;
  className?: string;
  title: string;
}

const TITLE = 'Markdoc';
const DESCRIPTION = 'A powerful, flexible, Markdown-based authoring framework';

function collectHeadings(node: any, sections: Heading[] = []): Heading[] {
  if (node) {
    if (node.name === 'Heading') {
      const title = node.children[0];

      if (typeof title === 'string') {
        sections.push({
          ...node.attributes,
          title,
        });
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections);
      }
    }
  }

  return sections;
}

export default function App({ Component, pageProps }: AppProps<MyAppProps>) {
  const { markdoc } = pageProps;

  let title = TITLE;
  let description = DESCRIPTION;
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title;
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description;
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : [];

  return (
    <PostHogProvider client={posthog}>
      <Layout toc={toc}>
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
