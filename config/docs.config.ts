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
			href: '/',
			identityKey: 'home',
		},
		{
			title: 'Docs',
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
					title: 'Identity',
					href: '/docs/identity',
					items: [],
				},
				{
					title: 'Permissions',
					href: '/docs/permissions',
					items: [],
				},
				{
					title: 'Functions',
					href: '/docs/functions',
					items: [],
				},
				{
					title: 'Jobs',
					href: '/docs/jobs',
					items: [],
				},
				{
					title: 'Events',
					href: '/docs/events',
					items: [],
				},
			],
		},
		{
			title: 'Guides',
			identityKey: 'docs',
			items: [
				{
					title: 'Next.js + Hackmamba',
					href: '/docs/next-hackmamba',
					items: [],
				},
				{
					title: 'Nuxt + Hackmamba',
					href: '/docs/nuxt-hackmamba',
					items: [],
				},
				{
					title: 'React + Hackmamba',
					href: '/docs/react-hackmamba',
					items: [],
				},
				{
					title: 'Vue + Hackmamba',
					href: '/docs/vue-hackmamba',
					items: [],
				},
				{
					title: 'solid.js + Hackmamba',
					href: '/docs/solid-hackmamba',
					items: [],
				},
				{
					title: 'Astro + Hackmamba',
					href: '/docs/astro-hackmamba',
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
