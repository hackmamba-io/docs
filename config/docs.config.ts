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
					href: '/docs/development',
					items: [],
				},
				{
					title: 'Global settings',
					href: '/docs/global-settings',
					items: [],
				},
				{
					title: 'Navigation',
					href: '/docs/navigation',
					items: [],
				},
			],
		},
		{
			title: 'Concepts',
			identityKey: 'docs',
			items: [
				{
					title: 'Models',
					href: '/docs/models',
					items: [],
				},
				{
					title: 'Actions',
					href: '/docs/actions',
					items: [],
				},
				{
					title: 'Global settings',
					href: '/docs/global-settings',
					items: [],
				},
				{
					title: 'Navigation',
					href: '/docs/navigation',
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
