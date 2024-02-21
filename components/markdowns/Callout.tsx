interface CalloutProps {
	icon?: string;
	title?: string;
	children?: React.ReactNode;
}

export function Callout({ icon, title, children }: CalloutProps) {
	return (
		<div className='flex flex-col my-6 w-full border dark:border-blue-200/30 px-3 py-4 rounded-lg text-sm bg-slate-50 dark:bg-blue-900/30'>
			{title && <p className='font-medium mb-1'>{title}</p>}
			<span className='leading-7 w-full'>{children}</span>
		</div>
	);
}
