import React, { useState } from 'react';
import { Noto_Sans } from 'next/font/google';
import MainNav from './main-nav';
import SideNav from './side-nav';
import { docsConfig } from '@/config/docs.config';
import MobileNav from './mobile-nav';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
	const [showModal, setShowModal] = useState(false);

	return (
		<div className={notoSans.className}>
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
				<SideNav
					items={docsConfig.sidebarNav}
					secodaryItems={docsConfig.secondaryNav}
				/>
				<article className='px-10 pt-10'>{children}</article>
			</div>
		</div>
	);
}
