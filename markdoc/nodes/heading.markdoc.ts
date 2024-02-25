import { Heading, HeadingProps } from '@/components/markdowns/Headings';
import { Tag } from '@markdoc/markdoc';

interface HeadingAttributes extends HeadingProps {
  id?: string;
  level?: number;
  className?: string;
}

function generateID(children: any[], attributes: HeadingAttributes): string {
  if (attributes.id && typeof attributes.id === 'string') {
    return attributes.id;
  }
  return children
    .filter((child) => typeof child === 'string')
    .join(' ')
    .replace(/[?]/g, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
}

export const heading = {
  render: Heading,
  children: ['inline'],
  attributes: {
    id: { type: String },
    level: { type: Number, required: true, default: 1 },
    className: { type: String },
  },
  transform(node: any, config: any) {
    const attributes = node.transformAttributes(config) as HeadingAttributes;
    const children = node.transformChildren(config);
    const id = generateID(children, attributes);

    return new Tag(this.render.toString(), { ...attributes, id }, children);
  },
};
