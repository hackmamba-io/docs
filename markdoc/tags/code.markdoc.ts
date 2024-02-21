import { Code } from "@/components/markdowns/Code";

export const code = {
    render: Code,
    children: ['paragraph', 'tag', 'list'],
    attributes: {
        title: {
            type: String,
        },
    },
};
