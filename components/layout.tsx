import React from 'react';
import { Noto_Sans } from 'next/font/google';
import MainNav from './main-nav';
import SideNav from './side-nav';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className={notoSans.className}>
			<MainNav />
			<div className='flex'>
				<SideNav />
				{children}
			</div>
		</div>
	);
}
