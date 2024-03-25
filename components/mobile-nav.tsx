import { IModal, NavProps } from '@/types/nav.types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icons } from './icons';

interface MobileNavProps extends NavProps, IModal {
	showModal: boolean;
}

export default function MobileNav({
	items,
	secodaryItems,
	setShowModal,
	showModal,
}: MobileNavProps) {
	const pathname = usePathname();

	return (
		<div
			className={`bg-black/20 backdrop-blur-sm h-screen max-h-screen w-full fixed z-50 inset-0 overflow-y-auto  lg:hidden ${
				showModal ? 'block' : 'hidden'
			}`}
		>
			<div className='min-h-screen w-3/4 px-4 py-4 bg-white'>
				<div className='flex mb-8'>
					<nav className='gap-6 w-full px-3'>
						{secodaryItems.map(
							(item, i) =>
								item.href && (
									<Link
										href={item.href}
										key={i}
										onClick={() => setShowModal(false)}
									>
										<span
											className={`text-base font-medium pb-3 capitalize block ${
												pathname === item.href
													? 'text-[#4F00A3] '
													: 'text-[#5A5A5C]'
											} `}
										>
											{item.title}
										</span>
									</Link>
								)
						)}
					</nav>
					<button
						className='w-8 h-8 flex items-center justify-center'
						onClick={() => setShowModal(false)}
					>
						<Icons.close />
					</button>
				</div>
				{items.map((item, i) => {
					const matchingSecondaryItem = secodaryItems.find(
						(secItem) =>
							secItem.identityKey &&
							pathname.includes(secItem.identityKey)
					);

					if (
						matchingSecondaryItem &&
						matchingSecondaryItem.identityKey === item.identityKey
					) {
						return (
							<div key={i}>
								<header className='py-[10px] pl-[10px] text-sm font-semibold mb-[10px]'>
									{item.title}
								</header>
								<ul>
									{item.items.map(
										(navItem, idx) =>
											navItem.href && (
												<li key={idx}>
													<Link
														href={navItem.href}
														onClick={() =>
															setShowModal(false)
														}
														className={`pl-[10px] py-[5px] w-full inline-block text-[13px] font-medium capitalize rounded-sm hover:text-black mb-[10px] ${
															pathname ===
															navItem.href
																? 'text-[#4F00A3] bg-[#F4EDFB]'
																: 'text-[#5A5A5C]'
														}`}
													>
														{navItem.title}
													</Link>
												</li>
											)
									)}
								</ul>
							</div>
						);
					} else {
						return null;
					}
				})}
			</div>
		</div>
	);
}
