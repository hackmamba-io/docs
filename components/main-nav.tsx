import Link from 'next/link';
import React from 'react';
import { Icons } from './icons';

export default function MainNav() {
	return (
		<header className='flex flex-col items-center justify-between'>
			<nav className='px-10 py-6 w-full flex justify-between'>
				<div className='w-full'>
					<Link href='/' className='mr-6 flex items-center space-x-2'>
						<Icons.logo />
					</Link>
				</div>
				<button className='hidden w-full lg:flex items-center text-sm leading-6 rounded-md py-1.5 pl-2 pr-3 shadow-sm text-gray-400 dark:text-white/50 bg-white ring-1 ring-gray-400/20 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary'></button>
				<div className='w-full flex justify-end'>
					<div className='h-9 w-20 px-3 border rounded-full flex justify-between items-center'>
						<button className='h-5 w-7 flex justify-center items-center rounded-2xl'>
							<Icons.dark />
						</button>
						<button className='h-5 w-7 bg-gray-300 flex justify-center items-center rounded-2xl'>
							<Icons.light />
						</button>
					</div>
				</div>
			</nav>
		</header>
	);
}
