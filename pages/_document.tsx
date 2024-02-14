import { Html, Head, Main, NextScript } from 'next/document';
import { siteMetaConfig } from '@/config/site.config';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<title>{siteMetaConfig.name}</title>
				<meta
					name={siteMetaConfig.name}
					content={siteMetaConfig.name}
				/>
				<meta
					name='keywords'
					content={siteMetaConfig.keywords.join(',')}
				></meta>
				<meta
					name='description'
					content={siteMetaConfig.description}
				></meta>

				<link rel='icon' href='/assets/siteLogo.svg' />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
