interface CardProps {
	size?: 'full' | 'md' | 'sm';
	children?: React.ReactNode;
}

export function Card({ size = 'full', children }: CardProps) {
	const sizeToWidthClass = {
		full: 'w-full',
		md: 'w-2/4',
		sm: 'w-1/4',
	};

	return (
		<div
			className={`flex flex-col my-6 ${sizeToWidthClass[size]} border dark:border-blue-200/30 px-3 py-4 rounded-lg text-sm`}
		>
			<span className='leading-7 w-full'>{children}</span>
		</div>
	);
}
