import cn from 'clsx';
import type { ComponentProps, ReactElement } from 'react';

export const Code = ({
	children,
	className,
	...props
}: ComponentProps<'code'>): ReactElement => {
	const hasLineNumbers = 'data-line-numbers' in props;
	return (
		<pre className='my-6 bg-slate-800 shadow-lg group rounded-lg px-6 py-6 border dark:border-blue-200/30'>
			<code
				className={cn(
					'w-full block',
					hasLineNumbers && '[counter-reset:line]',
					className
				)}
				// always show code blocks in ltr
				dir='ltr'
				{...props}
			>
				{children}
			</code>
		</pre>
	);
};
