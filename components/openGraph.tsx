interface IOpenGraph {
	currentURL: string;
	previewImage: string;
	siteName: string;
	pageTitle: string;
	description: string;
}

const OpenGraph = ({
	currentURL,
	description,
	pageTitle,
	previewImage,
	siteName,
}: IOpenGraph) => {
	return (
		<>
			<meta
				name='viewport'
				content='width=device-width, initial-scale=1'
			/>
			<meta charSet='utf-8' />
			<meta name='description' content={description} />
			<meta property='og:url' content={currentURL} key='ogurl' />
			<meta property='og:image' content={previewImage} key='ogimage' />
			<meta property='og:site_name' content={siteName} key='ogsitename' />
			<meta property='og:title' content={pageTitle} key='ogtitle' />
			<meta
				property='og:description'
				content={description}
				key='ogdesc'
			/>
			<meta name='twitter:card' content='summary_large_image' />
			<meta name='twitter:site' content={siteName} />
			<meta name='twitter:title' content={pageTitle} />
			<meta name='twitter:description' content={description} />
			<meta name='twitter:image' content={previewImage} />
		</>
	);
};

export default OpenGraph;
