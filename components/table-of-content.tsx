import Link from 'next/link';
import { Icons } from './icons';

export default function TableOfContent() {
	return (
		<div className='hidden md:hidden lg:block h-screen max-h-screen w-72'>
			<nav className='pt-10 border-r dark:border-r-slate-700 w-72 h-full styled-scrollbar overflow-y-scroll'>
				<div className='flex'>
					<Icons.menuSide />
					<div className='pl-[10px]'>
						<header className=' text-xs font-normal mb-[10px] text-[#4F00A3]'>
							On this page
						</header>
						<ul className='text-slate-600 dark:text-slate-400'>
							<li className='text-sm mb-4'>
								<Link href={'#'}>Developer journey</Link>
							</li>
							<li className='text-sm mb-4'>
								<Link href={'#'}>Documentation Structure</Link>
							</li>
							<li className='text-sm mb-4'>
								<Link href={'#'}>Libraries and SDKs</Link>
							</li>
							<li className='text-sm mb-4'>
								<Link href={'#'}>APIs</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
