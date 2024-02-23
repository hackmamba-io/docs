import Prism from 'prismjs';

import * as React from 'react';
import 'prismjs/themes/prism.css';
import { Check, Clipboard } from 'lucide-react';
// import 'prismjs/components/prism-bash.min';

interface CodeBlockProps {
	children: React.ReactNode | string;
	'data-language'?: string;
}

export function CodeBlock({
	children,
	'data-language': language,
}: CodeBlockProps) {
	const [copied, setCopied] = React.useState(false);
	const ref = React.useRef<HTMLPreElement>(null);

	React.useEffect(() => {
		if (ref.current) Prism.highlightElement(ref.current, false);
	}, [children]);

	React.useEffect(() => {
		if (copied) {
			const to = setTimeout(setCopied, 1000, false);
			return () => clearTimeout(to);
		}
	}, [copied]);

	const handleCopyClick = () => {
		if (ref.current) {
			const textToCopy = ref.current.innerText;

			navigator.clipboard.writeText(textToCopy).then(() => {
				setCopied(true);
				setTimeout(() => setCopied(false), 1000);
			});
		}
	};

	return (
		<div className='relative'>
			<div
				className='code my-6 px-3 text-sm border dark:border-blue-200/30 rounded-lg bg-black dark:bg-black/40 '
				aria-live='polite'
			>
				<button
					disabled={copied}
					onClick={handleCopyClick}
					className='absolute right-5 top-4 w-5 h-5 rounded hover:bg-slate-500/35 flex justify-center items-center'
				>
					{copied ? (
						<Check className='w-4' />
					) : (
						<Clipboard className='w-4' />
					)}
				</button>
				<pre ref={ref} className={`language-${language} overflow-auto`}>
					{children}
				</pre>
				<style jsx>
					{`
						.code {
							// position: relative;
						}

						/* Override Prism styles */
						.code :global(pre[class*='language-']) {
							text-shadow: none;
							border-radius: 4px;
						}

						:not(pre) > code[class*='language-'],
						pre[class*='language-'] {
							background: none;
						}

						code[class*='language-'],
						pre[class*='language-'] {
							color: #8d99a8;
						}
					`}
				</style>
			</div>
		</div>
	);
}
