
import { CodeBlock } from '@/components/markdowns/CodeBlock';
import { nodes } from '@markdoc/markdoc';

export const fence = {
  render: CodeBlock,
  attributes: nodes.fence.attributes,
};
