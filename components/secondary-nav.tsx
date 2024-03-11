import { siteThemeConfig } from '@/config/site.config';
import { SecondaryNavItem } from '@/types/nav.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SecondaryNavProps {
	items: SecondaryNavItem[];
}

export default function SecondaryNav({ items }: SecondaryNavProps) {
	const pathname = usePathname();

	return (
		<nav className='hidden lg:flex gap-6 mt-10 w-full px-10 min-h-9'>
			{items.map(
				(item, i) =>
					item.href && (
						<Link href={item.href} key={i}>
							<span
								className={`text-sm font-medium pb-3 capitalize ${
									pathname.includes(item.href)
										? `border-[${
												siteThemeConfig.light
													.borderColor
										  }] dark:border-[${
												siteThemeConfig.dark!
													.borderColor
										  }] text-[${
												siteThemeConfig.light.textColor
										  }] dark:text-[${
												siteThemeConfig.dark!.textColor
										  }] border-b-4`
										: ''
								} `}
							>
								{item.title}
							</span>
						</Link>
					)
			)}
		</nav>
	);
}
