
import { Card } from '@/components/markdowns/Card';

export const card = {
    render: Card,
    children: ['paragraph', 'tag', 'list', 'image'],
    attributes: {
        size: {
            type: String,
        },
    },
};

