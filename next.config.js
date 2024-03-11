const withMarkdoc = require('@markdoc/next.js');

module.exports = withMarkdoc(/* options */)({
	pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
	async redirects() {
		return [
			{
				source: '/',
				destination: '/docs',
				permanent: true,
			},
		];
	},
});
