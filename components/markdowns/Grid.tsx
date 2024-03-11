interface GridProps {
	children?: React.ReactNode;
}

export function Grid({ children }: GridProps) {

	return (
		<div
			className={`grid grid-cols-1 lg:grid-cols-2 gap-4 w-full my-6 rounded-lg text-sm`}
		>
			{children}
		</div>
	);
}
