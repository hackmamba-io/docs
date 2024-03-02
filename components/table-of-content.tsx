import Link from 'next/link';
import { Icons } from './icons';

export default function TableOfContent({ toc }: { toc: any[] }) {
	const items = toc.filter(
		(item) => item.id && (item.level === 2 || item.level === 3)
	);

	if (items.length <= 1) {
		return null;
	}

	return (
		<div className='hidden md:hidden lg:block h-screen max-h-screen w-72 relative'>
			<nav className='pt-10 w-[15rem] h-full styled-scrollbar overflow-y-scroll fixed md:right-0 2xl:right-auto'>
				<div className='flex'>
					<Icons.menuSide />
					<div className='pl-[10px]'>
						<header className=' text-xs font-normal mb-[10px] text-[#4F00A3]'>
							On this page
						</header>
						<ul className='text-slate-600 dark:text-slate-400'>
							{items.map((item) => {
								const href = `#${item.id}`;
								const active =
									typeof window !== 'undefined' &&
									window.location.hash === href;
								return (
									<li
										key={item.title}
										className={`text-sm mb-4 ${[
											active
												? 'text-[#4F00A3]'
												: undefined,
											item.level === 3
												? 'pl-4'
												: undefined,
										]
											.filter(Boolean)
											.join(' ')}`}
									>
										<Link href={href}>{item.title}</Link>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
}
