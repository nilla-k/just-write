import { RichText } from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import Link from 'next/link';

const RenderedRichText = ({ content }: { content: RichTextContent }) => {
  return (
    <RichText
      content={content}
      renderers={{
        blockquote: ({ children }) => (
          <blockquote className="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
            {children}
          </blockquote>
        ),
        code: ({ children }) => <code className="not-prose">{children}</code>,
        a: ({ children, openInNewTab, href, rel, ...rest }) => {
          if (href?.match(/^https?:\/\/|^\/\//i)) {
            return (
              <a
                href={href}
                target={openInNewTab ? '_blank' : '_self'}
                rel={rel || 'noopener noreferrer'}
                className="transition duration-300  text-[#3667b5] hover:text-[#314c78]"
                {...rest}
              >
                {children}
              </a>
            );
          }

          return (
            <Link href={href ?? ''}>
              <a {...rest}>{children}</a>
            </Link>
          );
        },
      }}
    />
  );
};

export default RenderedRichText;
