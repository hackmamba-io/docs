import { Tab } from '@/components/markdowns/Tab';
import { Tabs} from '@/components/markdowns/Tabs';
import { Tag } from '@markdoc/markdoc';

const tabs = {
    render: Tabs,
    attributes: {},
    transform(node: any, config: any) {
        const labels = node
            .transformChildren(config)
            .filter((child: any) => child && child.name === 'Tab')
            .map((tab: any) => (typeof tab === 'object' ? tab.attributes.label : null));

        return new Tag(this.render as any, { labels }, node.transformChildren(config));
    }
};

const tab = {
    render: Tab,
    attributes: {
        label: {
            type: String
        }
    }
};

/** @type {import('@markdoc/markdoc').Config} */
export {
    tabs,
    tab
};