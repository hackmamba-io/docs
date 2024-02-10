import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ItemProps {
	name: string;
	path: string;
}

interface SecondaryNavProps {
	items: ItemProps[];
}

export default function SecondaryNav({ items }: SecondaryNavProps) {
	const pathname = usePathname();

	return (
		<nav className='flex gap-6 mt-10 w-full px-10 min-h-9'>
			{items.map((item, i) => (
				<Link href={item.path} key={i}>
					<span
						className={`text-sm font-medium pb-3 capitalize ${
							pathname === item.path
								? 'border-[#4F00A3] text-[#4F00A3] border-b-4'
								: 'text-[#5A5A5C]'
						} `}
					>
						{item.name}
					</span>
				</Link>
			))}
		</nav>
	);
}
