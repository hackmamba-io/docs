import Link from 'next/link';

const Page = () => {
	const data = [
		{
			title: 'for developers',
			items: [
				{ name: 'introduction', href: '/docs' },
				{ name: 'development', href: '/development' },
				{ name: 'global settings', href: '/global-settings' },
				{ name: 'navigation', href: '/navigation' },
			],
		},
		{
			title: 'for security',
			items: [
				{ name: 'models', href: '/models' },
				{ name: 'actions', href: '/actions' },
				{ name: 'identity', href: '/identity' },
				{ name: 'Permissions', href: '/Permissions' },
			],
		},
		{
			title: 'for upgrade',
			items: [
				{ name: 'permissions', href: '/permissions' },
				{ name: 'functions', href: '/functions' },
				{ name: 'jobs', href: '/jobs' },
				{ name: 'events', href: '/events' },
			],
		},
	];
	return (
		<div className=''>
			<section>
				<h1 className='text-gre'>Documentation</h1>
				<h3>Explore our guides and example documentation components</h3>
				<Link
					href='/docs'
					className='px-4 py-3 bg-blue-800 mt-3 inline-block rounded-lg text-white no-underline'
				>
					Get Started with Boki
				</Link>
			</section>

			<section className='mt-14 border rounded-lg p-6 flex flex-col lg:flex-row justify-between'>
				{data.map((listItem, i) => (
					<div className='' key={i}>
						<h3 className='capitalize'>{listItem.title}</h3>

						{listItem.items.map((innerItems, j) => (
							<Link
								key={j}
								href={innerItems.href}
								className='no-underline capitalize text-blue-800 block mb-3'
							>
								{innerItems.name}
							</Link>
						))}
					</div>
				))}
			</section>
		</div>
	);
};

export default Page;
