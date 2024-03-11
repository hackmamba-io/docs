import Link from 'next/link';
import { Icons } from './icons';
import SecondaryNav from './secondary-nav';
import { IModal, SecondaryNavItem } from '@/types/nav.types';
import { siteAssetConfig, siteThemeConfig } from '@/config/site.config';
import { useEffect, useState } from 'react';

interface MainNavProps extends IModal {
	items: SecondaryNavItem[];
	isNavVisible: boolean;
}

export default function MainNav({
	isNavVisible,
	items,
	setShowModal,
}: MainNavProps) {
	const isLocalStorageAvailable =
		typeof window !== 'undefined' && window.localStorage;

	const savedTheme = isLocalStorageAvailable
		? localStorage.getItem('theme') || 'light'
		: 'light';
	const [theme, setTheme] = useState<string>(savedTheme);

	const updateTheme = (newTheme: string) => {
		localStorage.setItem('theme', newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		setTheme(newTheme);
	};

	const handleToggleLightTheme = () => {
		updateTheme('light');
	};

	const handleToggleDarkTheme = () => {
		updateTheme('dark');
	};

	useEffect(() => {
		document.documentElement.classList.add(theme);
		const buttons = document.querySelectorAll('.theme-button');
		buttons.forEach((button) => {
			const buttonTheme = button.getAttribute('data-theme');
			if (buttonTheme === theme) {
				button.classList.add('bg-gray-300');
			} else {
				button.classList.remove('bg-gray-300');
			}
		});
	}, [theme]);

	return (
		<div className='sticky top-0 w-full backdrop-blur-2xl transition-colors duration-500 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent z-10'>
			<header className='flex flex-col items-center justify-between border-b dark:border-b-slate-700 '>
				<nav className='px-4 py-4 lg:px-10 lg:py-6 w-full flex justify-between'>
					<div className='w-full'>
						<Link href='/' className=''>
							<siteAssetConfig.logo />
						</Link>
					</div>
					<button className='hidden bg-white dark:bg-slate-900 w-full lg:flex items-center justify-between text-sm leading-6 rounded-md py-1.5 pl-2 pr-3 shadow-sm text-gray-400 dark:text-white/50 border dark:border-slate-700 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary'>
						<div className='flex items-center'>
							<Icons.search />
							<span className='ml-4'>Search the docs</span>
						</div>
						<div className='flex w-[18px] h-[18px] border rounded-sm items-center justify-center bg-[#F7FAFC] dark:bg-slate-800'>
							/
						</div>
					</button>
					<button className='lg:hidden w-8 h-8 flex items-center justify-center'>
						<Icons.searchBig />
					</button>
					<button
						className='lg:hidden w-8 h-8 flex items-center justify-center'
						onClick={() => setShowModal(true)}
					>
						<Icons.menu />
					</button>
					<div className='hidden lg:flex w-full justify-end'>
						{siteThemeConfig.multiMode && (
							<div className='h-9 w-20 px-3 border rounded-full flex justify-between items-center'>
								<button
									className={`h-5 w-7 flex justify-center items-center rounded-2xl theme-button`}
									data-theme='dark'
									onClick={handleToggleDarkTheme}
								>
									<Icons.dark />
								</button>
								<button
									className={`h-5 w-7 flex justify-center items-center rounded-2xl theme-button`}
									data-theme='light'
									onClick={handleToggleLightTheme}
								>
									<Icons.light />
								</button>
							</div>
						)}
					</div>
				</nav>
				{isNavVisible && <SecondaryNav items={items} />}
			</header>
		</div>
	);
}
