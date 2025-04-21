import ReactMarkdown, { type Options } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import type { FC } from 'react';

interface Props extends Options {
  content?: string;
}

const Markdown: FC<Props> = ({ content, ...props }) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} {...props}>
      {content}
    </ReactMarkdown>
  );
};

export default Markdown;
