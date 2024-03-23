import React, { useState } from 'react';
import { Noto_Sans } from 'next/font/google';
import MainNav from './main-nav';
import SideNav from './side-nav';
import { docsConfig } from '@/config/docs.config';
import MobileNav from './mobile-nav';
import TableOfContent from './table-of-content';
import { usePathname } from 'next/navigation';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function Layout({
	children,
	toc,
}: {
	children: React.ReactNode;
	toc: any[];
}) {
	const [showModal, setShowModal] = useState(false);
	const pathname = usePathname();

	return (
		<div
			className={`${notoSans.className} text-slate-600 dark:text-slate-400 2xl:max-w-7xl mx-auto`}
		>
			<MainNav
				isNavVisible={true}
				items={docsConfig.secondaryNav}
				setShowModal={setShowModal}
			/>
			<MobileNav
				items={docsConfig.sidebarNav}
				secodaryItems={docsConfig.secondaryNav}
				setShowModal={setShowModal}
				showModal={showModal}
			/>
			<div className='flex'>
				{pathname === '/' ? null : (
					<SideNav
						items={docsConfig.sidebarNav}
						secodaryItems={docsConfig.secondaryNav}
					/>
				)}
				<article className='px-10 pt-10 w-full lg:w-11/12 lg:ps-14'>
					{children}
				</article>
				<TableOfContent toc={toc} />
			</div>
		</div>
	);
}
