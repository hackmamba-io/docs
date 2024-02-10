import React from 'react';
import { Noto_Sans } from 'next/font/google';
import MainNav from './main-nav';

const notoSans = Noto_Sans({ subsets: ['latin'] });

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className={notoSans.className}>
			<MainNav />
			{children}
		</main>
	);
}
