import React, { useContext, FC, ReactNode } from 'react';
import { TabContext } from './Tabs';

interface TabProps {
	label: string;
	children: ReactNode;
}

export const Tab: FC<TabProps> = ({ label, children }) => {
	const currentTab = useContext(TabContext);

	if (label !== currentTab) {
		return null;
	}

	return children;
};
