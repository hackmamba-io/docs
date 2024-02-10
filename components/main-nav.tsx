import Link from 'next/link';
import { Icons } from './icons';
import SecondaryNav from './secondary-nav';

export default function MainNav() {
	return (
		<div className='sticky top-0 w-full backdrop-blur transition-colors duration-500 supports-backdrop-blur:bg-background-light/60 dark:bg-transparent'>
			<header className='flex flex-col items-center justify-between border-b'>
				<nav className='px-10 py-6 w-full flex justify-between'>
					<div className='w-full'>
						<Link
							href='/'
							className='mr-6 flex items-center space-x-2'
						>
							<Icons.logo />
						</Link>
					</div>
					<button className='hidden w-full lg:flex items-center justify-between text-sm leading-6 rounded-md py-1.5 pl-2 pr-3 shadow-sm text-gray-400 dark:text-white/50 bg-white ring-1 ring-gray-400/20 hover:ring-gray-600/25 dark:ring-gray-600/30 dark:hover:ring-gray-500/30 focus:outline-primary'>
						<div className='flex items-center'>
							<Icons.search />
							<span className='ml-4'>Search the docs</span>
						</div>
						<div className='flex w-[18px] h-[18px] border rounded-sm items-center justify-center bg-[#F7FAFC]'>
							/
						</div>
					</button>
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
				<SecondaryNav
					items={[
						{ name: 'home', path: '/' },
						{ name: 'API guide', path: '/guide' },
					]}
				/>
			</header>
		</div>
	);
}
