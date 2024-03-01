// TypeScript example

import Markdoc from "@markdoc/markdoc";

interface Heading {
    level: number;
    id?: string;
    className?: string;
    title: string;
}

function collectHeadings(node: any, sections: Heading[] = []): Heading[] {
    if (node) {
        // Match all h1, h2, h3… tags
        if (node.name.match(/h\d/)) {
            const title = node.children[0];

            if (typeof title === 'string') {
                sections.push({
                    ...node.attributes,
                    title
                });
            }
        }

        if (node.children) {
            for (const child of node.children) {
                collectHeadings(child, sections);
            }
        }
    }

    return sections;
}

const content = Markdoc.transform(ast);
const headings: Heading[] = collectHeadings(content);
