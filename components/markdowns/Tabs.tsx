import React, { createContext, FC, ReactNode, useState } from 'react';

interface TabsProps {
	labels: string[];
	children: ReactNode;
}

export const TabContext = createContext<string | undefined>(undefined);

export const Tabs: FC<TabsProps> = ({ labels, children }) => {
	const [currentTab, setCurrentTab] = useState<string>(labels[0]);

	return (
		<TabContext.Provider value={currentTab}>
			<div className='mt-6'>
				<ul
					role='tablist'
					className='w-full flex border-b dark:border-b-slate-700'
				>
					{labels.map((label) => (
						<li key={label} className='w-16'>
							<button
								role='tab'
								aria-selected={label === currentTab}
								onClick={() => setCurrentTab(label)}
								className={`font-medium text-sm px-4 ${
									currentTab === label
										? 'text-slate-700 dark:text-slate-200 border-b-2 border-slate-700 pb-4'
										: ''
								}`}
							>
								{label}
							</button>
						</li>
					))}
				</ul>
				<div className='p-4'>{children}</div>
			</div>
		</TabContext.Provider>
	);
};
