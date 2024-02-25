import { CodeBlock } from "@/components/markdowns/CodeBlock";

export const code = {
    render: CodeBlock,
    children: ['paragraph', 'tag', 'list'],
    attributes: {
        title: {
            type: String,
        },
    },
};
