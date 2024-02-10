import Link from 'next/link';
import React from 'react';

export default function SideNav() {
	return (
		<nav className='pl-10 pt-10 border-r h-screen w-72 styled-scrollbar overflow-y-scroll'>
			<header className='py-[10px] pl-[10px] text-sm font-semibold mb-[10px]'>
				Get started
			</header>
			<ul>
				<li>
					<Link
						href='/'
						className='pl-[10px] py-[5px] w-full inline-block text-[13px] text-[#4F00A3] font-medium capitalize bg-[#F4EDFB] rounded-sm hover:text-black mb-[10px]'
					>
						introduction
					</Link>
					<Link
						href='/'
						className='pl-[10px] py-[5px] w-full inline-block text-[13px] text-[#5A5A5C] font-medium capitalize rounded-sm hover:text-black mb-[10px]'
					>
						What is Hackmamba
					</Link>
					<Link
						href='/'
						className='pl-[10px] py-[5px] w-full inline-block text-[13px] text-[#5A5A5C] font-medium capitalize rounded-sm hover:text-black mb-[10px]'
					>
						Development
					</Link>
					<Link
						href='/'
						className='pl-[10px] py-[5px] w-full inline-block text-[13px] text-[#5A5A5C] font-medium capitalize rounded-sm hover:text-black mb-[10px]'
					>
						Global Settings
					</Link>
					<Link
						href='/'
						className='pl-[10px] py-[5px] w-full inline-block text-[13px] text-[#5A5A5C] font-medium capitalize rounded-sm hover:text-black mb-[10px]'
					>
						Navigation
					</Link>
				</li>
			</ul>
		</nav>
	);
}
