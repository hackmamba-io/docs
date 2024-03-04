import { siteThemeConfig } from '@/config/site.config';
import { NavProps, SecondaryNavItem, SidebarNavItem } from '@/types/nav.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SideNav({ items, secodaryItems }: NavProps) {
	const pathname = usePathname();

	return (
		<div className='hidden lg:block h-screen max-h-screen w-72'>
			<nav className='pl-10 pt-10 border-r dark:border-r-slate-700 w-[15rem] h-full styled-scrollbar overflow-y-scroll fixed'>
				{items.map((item, i) => {
					const matchingSecondaryItem = secodaryItems.find(
						(secItem) =>
							secItem.identityKey &&
							pathname.includes(secItem.identityKey)
					);

					if (
						matchingSecondaryItem &&
						matchingSecondaryItem.identityKey === item.identityKey
					) {
						return (
							<div key={i}>
								<header className='py-[10px] pl-[10px] text-sm font-semibold mb-[10px]'>
									{item.title}
								</header>
								<ul className='list-none'>
									{item.items.map(
										(navItem, idx) =>
											navItem.href && (
												<li key={idx}>
													<Link
														href={navItem.href}
														className={`pl-[10px] py-[5px] w-full inline-block text-[13px] font-medium capitalize rounded-sm hover:text-slate-900 hover:dark:text-slate-200/85  mb-[10px] ${
															pathname ===
															navItem.href
																? `text-[${
																		siteThemeConfig
																			.light
																			.textColor
																  }] bg-[${
																		siteThemeConfig
																			.light
																			.bgColor
																  }] dark:bg-[${
																		siteThemeConfig.dark!
																			.bgColor
																  }] hover:text-[${
																		siteThemeConfig
																			.light
																			.textColor
																  }] hover:dark:text-[${
																		siteThemeConfig
																			.light
																			.textColor
																  }]`
																: ''
														}`}
													>
														{navItem.title}
													</Link>
												</li>
											)
									)}
								</ul>
							</div>
						);
					} else {
						return null;
					}
				})}
			</nav>
		</div>
	);
}
