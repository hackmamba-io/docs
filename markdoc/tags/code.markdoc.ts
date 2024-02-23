import { Code } from "@/components/markdowns/CodeBlock";

export const code = {
    render: Code,
    children: ['paragraph', 'tag', 'list'],
    attributes: {
        title: {
            type: String,
        },
    },
};
