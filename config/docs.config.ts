import { SecondaryNavItem, SidebarNavItem } from '@/types/nav.types';

interface DocsConfig {
	secondaryNav: SecondaryNavItem[];
	sidebarNav: SidebarNavItem[];
	isSecondaryNav?: boolean;
}

export const docsConfig: DocsConfig = {
	secondaryNav: [
		{
			title: 'Home',
			href: '/docs',
			identityKey: 'docs',
		},
		{
			title: 'API Guide',
			href: '/guide',
			identityKey: 'guide',
		},
	],
	sidebarNav: [
		{
			title: 'Get started',
			identityKey: 'docs',
			items: [
				{
					title: 'Introduction',
					href: '/docs',
					items: [],
				},
				{
					title: 'Development',
					href: '/docs/dev',
					items: [],
				},
				{
					title: 'Global settings',
					href: '/docs/settings',
					items: [],
				},
				{
					title: 'Navigation',
					href: '/docs/settings',
					items: [],
				},
			],
		},
		{
			title: 'API Guide',
			identityKey: 'guide',
			items: [
				{
					title: 'Introduction',
					href: '/guide',
					items: [],
				},
				{
					title: 'Development',
					href: '/guide/dev',
					items: [],
				},
				{
					title: 'Global settings',
					href: '/guide/settings',
					items: [],
				},
				{
					title: 'Navigation',
					href: '/guide/settings',
					items: [],
				},
			],
		},
	],
};
